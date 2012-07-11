--- 
layout: post
title: 'Problema ao usar resources com palavras sem plural'
disqus_id: /2009/1/23/problema-ao-usar-resources-com-palavras-sem-plural
categories: 
  []
tags:
  - rails
---


No [V2V][] nós criamos um resource que é utilizado para o formulário de contato (formmail) do site. O nome do resource é **contact\_us**. O nosso _routes.rb_ ficava assim:

    map.resources :contact_us

E temos uma configuração de *inflector* para informar ao Rails que essa é uma expressão incontável:

    ActiveSupport::Inflector.inflections do |inflect|
      inflect.uncountable %w(contact_us)
    end

O problema é que ao tentar gerar a url com o método _contact\_us\_url_ para o formulário acontece o seguinte erro:

    contact_us_url failed to generate from {:controller=>"contact_us", :action=>"show"} - you may have ambiguous routes, or you may need to supply additional parameters for this route.  content_url has the following required parameters: ["contact_us", :id] - are they all satisfied?

Isso acontece pois o Rails sobrescreve o método que gera a url da coleção com o método que gera a url de instância dos objetos. Para resolver isso temos que informar no arquivo de rotas o nome que será utilizado nos métodos no caso de ser uma instância e não uma coleção:

    map.resources :contact_us, :singular => :contact_us_item

Isso fará os métodos ficarem assim:

    contact_us_path() => /contact_us
    new_contact_us_item_path() => /contact_us/new
    contact_us_item_path(1) => /contact_us/1
    edit_contact_us_item_path(1) => /contact_us/1

Reparem que no caso de não ser usada a opção _:singular_ o método de acesso a coleção e da instância ficam com nomes iguais: 

    contact_us_path() => /contact_us
    contact_us_path(1) => /contact_us/1

Isso não acontece com expressões normais pois o Rails utiliza para a coleção a expressão com pluralize. Supondo que o nosso resource fosse de posts, os métodos seriam:

    posts_path() => /posts
    new_post_path() => /posts/new
    post_path(1) => /posts/1
    edit_post_path(1) => /posts/1

[V2V]: http://v2v.org.br


