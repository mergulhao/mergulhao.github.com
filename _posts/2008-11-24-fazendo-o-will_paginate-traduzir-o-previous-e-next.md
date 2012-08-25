--- 
layout: post
title: 'Fazendo o will_paginate traduzir o "Previous" e "Next"'
categories: 
  []
tags:
  - rails
  - bdd
  - rspec
---


Eu precisei traduzir para várias línguas os links de "Previous" e "Next" do [will\_paginate][will_paginate], mas não seria nada dry passar os parâmetros em todas as chamadas a _will\_paginate()_. Outra solução seria criar um método helper que faria a chamada ao _will\_paginate()_ passando os parâmetros e nas minhas views eu chamaria esse helper no lugar de chamar _will\_paginate()_. O problema é que sempre que fosse criada uma nova tela com paginação a pessoa teria que lembrar de chamar o método helper e não chamar o _will\_paginate()_ diretamente.

Então pra mim a melhor solução foi criar uma extensão, que deixa tudo transparente. Eu coloquei em _/lib_ dentro do projeto rails.

    module WillPaginate
      module ViewHelpers
        def will_paginate_with_translate(collection = nil, options = {})
          options, collection = collection, nil if collection.is_a? Hash
          options.merge!(:prev_label => _("&laquo; Previous"), :next_label => _("Next &raquo;"))
          
          if collection
            will_paginate_without_translate(collection, options)
          else
            will_paginate_without_translate(options)
          end
        end
        alias_method_chain :will_paginate, :translate
      end
    end

O método _\_()_ que é chamado é o método que faz a tradução no plugin de [localização][] que estou utilizando, você deve alterar para a forma como você faz a localização no seu projeto. Também criei as specs para assegurar o funcionamento:

    require File.dirname(__FILE__) + '/../spec_helper'

    describe WillPaginate::ViewHelpers do
      describe "will_paginate translations" do
        before(:each) do
          @expected = 'paginate_mock'
          @model = mock('model-mock')
          
          @translation_options = {:prev_label => _("&laquo; Previous"), :next_label => _("Next &raquo;")}
          @options = {:option1 => '1', :option2 => '2', :next_label => 'next-fake'}
        end
        
        it "should will_paginate only with translations" do
          helper.should_receive(:will_paginate_without_translate).with(@translation_options).and_return(@expected)
          helper.will_paginate == @expected
        end
        
        it "should will_paginate with @model parameter" do
          helper.should_receive(:will_paginate_without_translate).with(@model, @translation_options).and_return(@expected)
          helper.will_paginate(@model) == @expected
        end
        
        it "should will_paginate with @model parameter and options" do
          helper.should_receive(:will_paginate_without_translate).with(@model, @options.merge(@translation_options)).and_return(@expected)
          helper.will_paginate(@model, @options) == @expected
        end
      end
    end

Espero que seja útil para alguém ;)

[will_paginate]: http://github.com/mislav/will_paginate/wikis
[localização]: http://github.com/rails/localization/tree/master


