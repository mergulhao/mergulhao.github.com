--- 
layout: post
title: 'Syntax Highlight Mephisto plugin'
categories: 
  []
tags:
  - rails
  - mephisto
  - plugin
---


**UPDATE:** Atualizado localização do repositório svn!

Já havia um tempo que eu queria adicionar syntax highlight nos códigos que escrevo aqui no blog. Resolvi pesquisar se já hávia algum plugin para [Mephisto][mephisto], mas não encontrei nenhum que utilizasse o [dp.SyntaxHighlighter][dp].

Utilizei como base o [plugin][pgdan] do [Dan Webb][dan] e fiz as modificações necessárias para utilizar o [dp.SyntaxHighlighter][dp]. Para instalar:

    script/plugin install http://mergulhao.info/svn/mephisto_plugins/filtered_column_better_code_highlighter/trunk/

Agora é só seguir as instruções do [README][readme] e já poderá fazer isso:

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

A vantagem de utilizar um syntax highlighter client-side como o [dp.SyntaxHighlighter][dp] é que o seu código original fica limpo, fácil de editar novamente. Uma possível desvantagem é que pode ficar lento caso tenha muito código para fazer a sintaxe, já que ele usa javascript.

[readme]: http://svn.mergulhao.info/mephisto_plugins/filtered_column_better_code_highlighter/trunk/README
[dan]: http://www.danwebb.net/
[pgdan]: http://svn.danwebb.net/external/rails/plugins/filtered_column_code_highlighter/trunk/
[dp]: http://code.google.com/p/syntaxhighlighter/
[mephisto]: http://mephistoblog.com
