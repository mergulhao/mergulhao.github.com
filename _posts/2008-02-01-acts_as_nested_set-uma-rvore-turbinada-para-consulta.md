--- 
layout: post
title: 'Acts_as_nested_set, uma árvore turbinada para consulta'
disqus_id: /2008/2/1/acts_as_nested_set-uma-rvore-turbinada-para-consulta
categories: 
  []
tags:
  - rails
  - artigos
---


No projeto [Lucidus][lucidus] ficamos diante de um problema há algumas semanas. Chegamos num ponto do projeto onde muitas coisas haviam sido desenvolvidas em torno de uma [chave natural][cn] que representava uma conta pertencente a uma árvore de contas contábil. A árvore contábil (ou plano de contas) é uma estrutura hierárquica de 5 níveis.

Uma conta num sistema contábil é um número, que possui uma semantica associada, onde se colocam lançamentos de despesa (gastos com luz, empregados, etc) ou receita (recebimento de aluguél, condomínio, etc).

Simples exemplo de árvore contábil:

 * 1 0 00 00 00 - Primeiro nível
 * 1 1 00 00 00 - Segundo nível
 * 1 1 01 00 00 - Terceiro nível
 * 1 1 01 01 00 - Quarto nível
 * 1 1 01 01 01 - Quinto nível
 * 1 1 01 01 02 - Quinto nível

O problema se desenvolveu pelo fato de estarmos utilizando uma [chave natural][cn] e uma estrutura com simulação de árvore através da [chave natural][cn]. Para encontrarmos o pai ou os filhos de uma conta era necessário realizarmos buscas no banco utilizando coisas como "like '1101%'", por exemplo, o que fazia os índices não terem efeito algum. Em algumas situações geramos relatórios consolidados buscando dados dos últimos 12 meses, o que gerava (sem exagero) milhares de queries no banco e cálculos absurdos.

A coisa começou a ficar inviável por 2 motivos: o desempenho não estava satisfatório e a complexidade do código dos nossos modelos estava ficando grande demais, devido a necessidade de simular o efeito de árvore e outros problemas decorrentes.

Tínhamos que resolver o problema, mas qualquer solução que se utilizasse de uma simples árvore iria decair em problema semelhante de desempenho, pela quantidade de queries que teriam que ser realizadas para varrer toda a árvore de contas. Resolvemos ver do que se tratava o [acts\_as\_nested\_set][nestedset] do Rails e ele implementava justamente o que precisávamos: uma árvore de busca implementada para um modelo do ActiveRecord! Para inserção de um nó ela é mais lenta que no [acts\_as\_tree][acts_as_tree], mas na consulta ela pode buscar todos os filhos(e filhos dos filhos e assim por diante) de um nó com apenas uma query.

O [acts\_as\_nested\_set][nestedset] ainda não implementava todos os métodos que necessitávamos, como o método __level__, que informa a qual nível um nó pertence. Então continuando a busca por uma solução encontramos o plugin [better\_nested\_set][betternestedset] que faz tudo que o original faz, mas implementando diversos outros métodos utilitários.

Então decidimos resolver o problema de vez e tivemos a [coragem][coragem] de refatorar todo o sistema implementando o [better\_nested\_set][betternestedset] na árvore de contas.

Para a teoria de funcionamento dessa árvore, modo de cálculo dos índices e etc, busque nos links citados que encontrará todas as informações. Farei apenas uma pequena explicação sobre como utilizá-la em seu projeto Rails.

Primeiro de tudo, instale o plugin no seu projeto:

    script/plugin install svn://rubyforge.org/var/svn/betternestedset/tags/stable/betternestedset

Crie um modelo e uma migração. No projeto exemplo criei um modelo __conta__:

    script/generate model conta

E defini a migração assim:

    class CreateContas < ActiveRecord::Migration 
      def self.up 
        create_table :contas do |t| 
          t.string :codigo, :limit => 8, :null => false 
          t.integer :parent_id 
          t.integer :lft 
          t.integer :rgt 
          t.timestamps 
        end 
      end 

      def self.down 
        drop_table :contas 
      end 
    end

Repare que há um campo __parent\_id__ que representará o nó pai e os índices __lft__ e __rgt__ (**não use left e right, pois em geral são palavras reservadas nos banco de dados**) que são utilizados pela árvore.

O nosso modelo fica assim:

    class Conta < ActiveRecord::Base
      acts_as_nested_set
    end

Agora podemos brincar com nossa árvore! Vamos ao console:

    Loading development environment (Rails 2.0.2) 
    >> Conta.roots 
    => []

Nosso modelo dizendo que não há nenhum nó raiz. Vamos criar um:

    >> conta1 = Conta.create(:codigo => '10000000') 
    => #<Conta id: 1, codigo: "10000000", parent_id: nil, lft: 1, rgt: 2, created_at: "2008-02-01 00:28:58", updated_at: "2008-02-01 00:28:58"> 
    >>

__Conta.roots__ agora retorna nossa recém criada conta:

    >> Conta.roots 
    => [#<Conta id: 1, codigo: "10000000", parent_id: nil, lft: 1, rgt: 2, created_at: "2008-02-01 00:30:56", updated_at: "2008-02-01 00:30:56">] 
    >>

Podemos adicionar um filho a ela:

    >> conta1.add_child(Conta.create(:codigo => '11000000'))

E consultar os filhos de conta1:

    >> conta1.children 
    => [#<Conta id: 2, codigo: "11000000", parent_id: 1, lft: 2, rgt: 3, created_at: "2008-02-01 00:33:03", updated_at: "2008-02-01 00:33:03">] 
    >>

E adicionar um filho a nossa segunda conta:

    >> conta2 = Conta.find(2) 
    => #<Conta id: 2, codigo: "11000000", parent_id: 1, lft: 2, rgt: 3, created_at: "2008-02-01 00:33:03", updated_at: "2008-02-01 00:33:03"> 
    >> conta2.add_child(Conta.create(:codigo => '11010000')) 
    => #<Conta id: 2, codigo: "11000000", parent_id: 1, lft: 2, rgt: 5, created_at: "2008-02-01 00:33:03", updated_at: "2008-02-01 00:33:03"> 
    >>

E assim sucessivamente até termos os 5 níveis contábeis(inseri dois nós no último nível, como no exemplo no início do artigo). Após as inserções fazemos uma busca por todos os filhos do nosso nó raiz:

    >> conta1.all_children 
    => [#<Conta id: 2, codigo: "11000000", parent_id: 1, lft: 2, rgt: 11, created_at: "2008-02-01 00:33:03", updated_at: "2008-02-01 00:33:03">, #<Conta id: 3, codigo: "11010000", parent_id: 2, lft: 3, rgt: 10, created_at: "2008-02-01 00:35:18", updated_at: "2008-02-01 00:35:18">, #<Conta id: 4, codigo: "11010100", parent_id: 3, lft: 4, rgt: 9, created_at: "2008-02-01 00:37:17", updated_at: "2008-02-01 00:37:17">, #<Conta id: 5, codigo: "11010101", parent_id: 4, lft: 5, rgt: 6, created_at: "2008-02-01 00:37:50", updated_at: "2008-02-01 00:37:50">, #<Conta id: 6, codigo: "11010102", parent_id: 4, lft: 7, rgt: 8, created_at: "2008-02-01 00:40:28", updated_at: "2008-02-01 00:40:28">] 
    >> conta1.all_children.size 
    => 5 
    >>

E se verificarmos no log, apenas uma sql foi executada para busca de todos os filhos:

    Conta Load (0.004532)   SELECT * FROM contas WHERE (1 = 1 AND (lft BETWEEN 1 AND 10)) ORDER BY lft

Espero que possa ser útil para alguém! Se precisarem de uma estrutura que se pareça com uma árvore e precise ser otimizada para consulta, não deixe de conferir esse plugin.

Os arquivos desse artigo podem ser baixados aqui: 

[http://mergulhao.info/assets/2008/8/22/betternestedset.tgz](http://mergulhao.info/assets/2008/8/22/betternestedset.tgz)

[lucidus]: http://www.rioonrails.com.br/speeches/projeto-lucidus
[cn]: http://en.wikipedia.org/wiki/Natural_key
[coragem]: http://www.improveit.com.br/xp/valores/coragem
[refatoracao]: http://www.improveit.com.br/xp/praticas/refatoracao
[nestedset]: http://api.rubyonrails.org/classes/ActiveRecord/Acts/NestedSet/ClassMethods.html
[acts_as_tree]: http://wiki.rubyonrails.org/rails/pages/ActsAsTree
[betternestedset]: http://opensource.symetrie.com/trac/better_nested_set/
