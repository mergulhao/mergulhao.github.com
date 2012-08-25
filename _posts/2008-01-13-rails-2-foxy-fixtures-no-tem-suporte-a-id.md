--- 
layout: post
title: 'Rails 2: Foxy Fixtures não tem suporte a id!'
categories: 
  []
tags:
  - rails
---


Essa semana no [projeto Lucidus][lucidus] passamos por um problema com as foxy fixtures do Rails 2.

Estávamos utilizando um modelo que possuia um autorelacionamento e outro modelo que se relacionava com o primeiro. Algo equivalente a:

    class Pessoa < ActiveRecord::Base  
      belongs_to :pai, :class_name => 'Pessoa', :foreign_key => 'pai_id'  
    end  

    class Endereco < ActiveRecord::Base  
      belongs_to :pessoa  
    end  

E precisávamos criar uma fixture de pessoa que tivesse um relacionamento para outra fixture pessoa, além de uma fixture de endereço que se relacionasse com uma de pessoa. Não sabiamos que as foxy fixtures possuiam suporte a autorelacionamento então primeiro tentamos algo como:

    # pessoas.yml
    pai_01:
      id: 1
      nome: Nome do Pai

    filho_01:
      id: 2
      nome: Nome do Filho
      pai_id: 1

    # enderecos.yml
    endereco_01:
      pessoa: filho_01
      rua: rua 1
      numero: 25

Teoricamente, no carregamento das fixtures no banco, deveria fazer o apontamento correto do endereço **endereco\_01** preenchendo o campo **pessoa\_id** do mesmo com o id **2**, do **filho\_01**. Mas não era isso que acontecia. Era preenchido um id aleatório no campo **pessoa\_id** do **endereco\_01**(se o banco possuisse a constraint de foreign key daria erro no carregamento, claro). Já estávamos achando que era um problema/bug(e é na verdade) das foxy fixtures, mas resolvi pesquisar no [changelog][cl] do activerecord e descobri que não há suporte a ids nas foxy fixtures, tudo deve ser indexado somente pelos nomes e há suporte a autorelacionamento. Corrigindo então fica assim:

    # pessoas.yml
    pai_01:
      nome: Nome do Pai

    filho_01:
      nome: Nome do Filho
      pai: pai_01

    # enderecos.yml
    endereco_01:
      pessoa: filho_01
      rua: rua 1
      numero: 25

Desse modo todos os ids são criados dinamicamente, e as fixtures se acham na hora do load no banco para a execução dos testes.

**Obs:** Eu não testei esse código, escrevi tudo direto no editor, pode ser que exista algum erro de sintaxe ou coisa assim.

[lucidus]: http://www.rioonrails.com.br/speeches/projeto-lucidus
[cl]: http://api.rubyonrails.com/files/vendor/rails/activerecord/CHANGELOG.html


