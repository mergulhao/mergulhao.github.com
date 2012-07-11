--- 
layout: post
title: 'acts_as_taggable_on_steroids e will_paginate'
disqus_id: /2009/1/21/acts_as_taggable_on_steroids-e-will_paginate
categories: 
  []
tags:
  - rails
  - plugin
---


Num dos projetos que trabalho utilizo o plugin [acts\_as\_taggable\_on\_steroids][acts_as_taggable_on_steroids]. Pela primeira vez fui fazer paginação de elementos com tags utilizando o [will\_paginate][will_paginate]. O [acts\_as\_taggable\_on\_steroids][acts_as_taggable_on_steroids] fornece o método de classe _find\_tagged\_with_ que serve para buscar por items com uma determinada tag:

    Post.find\_tagged\_with('rails')

E é possível fazer paginação utilizando o método _paginate\_tagged\_with_, mas o problema é que ele não funciona como deveria. Apesar de fazer a paginação funcionar corretamente, a sql que ele gera para fazer o count dos elementos não é correta. Se usado sem conditions, ele gera o número de páginas considerando todos os elementos da base. Eu escrevi o seguinte monkey patch, que coloquei no _/lib_ do projeto:

    module ActiveRecord
      module Acts
        module Taggable
          module SingletonMethods
            def paginate_tagged_with(tags, args = {})
              options = find_options_for_find_tagged_with(tags, :match_all => true)
              options.merge!(args)
              paginate(options.merge(:count => { :select => options[:select].gsub("#{table_name}.*", "#{table_name}.id") }))
            end
          end
        end
      end
    end

Para usar basta colocar no seu controller algo como:

    @posts = Post.paginate_tagged_with(params[:tag_id], :page => params[:page] || 1)

Também escrevi uma spec para testar o funcionamento. Ela só faz sentido dentro do contexto do meu projeto, mas basta você modificar as fixtures, os modelos, etc, de acordo com seu projeto.

    describe Post do
      it "should return the correct total_pages to will_paginate" do
        post = posts(:blog_post)
        5.times do
          new_post = BlogPost.new(post.attributes)
          new_post.tag_list = 'global'
          new_post.save
        end
        paginator = BlogPost.paginate_tagged_with('global', :page => 1, :per_page => 2)
        paginator.total_entries.should == 6
        paginator.total_pages.should == 3
      end
    end

[acts_as_taggable_on_steroids]: http://agilewebdevelopment.com/plugins/acts_as_taggable_on_steroids
[will_paginate]: http://github.com/mislav/will_paginate


