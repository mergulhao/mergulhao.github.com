--- 
layout: post
title: 'Autocomplete simples para Rails 3 com jQuery'
categories: 
  []
tags:
  - ruby
  - javascript
  - rails3
  - jquery
  - autocomplete
  - form
---


Autocomplete é uma ferramenta muito útil em um aplicativo web. Tanto para manter a consistencia dos dados quanto para facilitar a vida do usuário.

A gem [rails3-jquery-autocomplete](https://github.com/crowdint/rails3-jquery-autocomplete) torna a implementação do autocomplete no rails 3 bem simples.

Antes de começar, verifique se você já está incluindo o [jQuery](http://jquery.com/) e o [jQuery.ui](http://jqueryui.com/demos/autocomplete/) em seu layout, pois eles são pre-requisito para essa gem.

Se estiver tudo ok, vamos ao trabalho. Para começar, os passos básicos:

Adicione a gem ao seu Gemfile:

    gem 'rails3-jquery-autocomplete'

Dê um:

    bundle install

Rode o generator:

    rails generate autocomplete

E inclua o javascript em seu layout:

    javascript_include_tag "autocomplete-rails.js"


Então, com tudo configurado partimos para a utilização.

Digamos que nós tivessemos os modelos Product e Category e quisessemos fazer autocomplete do nome da categoria nos formulários dos produtos.

Note que o campo category do modelo Product precisa ser um campo de texto. Para fazer autocomplete em um campo que é chave estrangeira a abordagem é um pouco diferente, e vai ficar para um próximo post.

Seguindo. O próximo passo é adicionar no products_controller.rb:

    autocomplete :category, :name

Isso cria uma action chamada autocomplete\_category\_name que retorna um json com os valores possiveis para o campo name.

Inclua a action nas rotas:

    resources :products do
      get :autocomplete_category_name, :on => :collection
    end

Nas views você só precisa substituir o text_field pela tag autocomplete\_field, como no exemplo:

    form_for @product do |f|
      f.autocomplete_field :category_name, autocomplete_category_name_products_path
    end

E é só. Você tem um autocomplete pronto e funcional.

