--- 
layout: post
title: 'Como vocês fazem o "describe" das suas specs?'
disqus_id: /2008/11/28/como-voc-s-fazem-o-describe-das-suas-specs
categories: 
  []
tags:
  - rails
  - ruby
  - bdd
  - rspec
---


Isso pra mim sempre foi uma dúvida ao usar o rspec. Realmente não há forma correta. É uma opção pessoal no caso de um projeto particular ou de decisão em conjunto no caso de um projeto onde vários desenvolvedores participam.

Mas o fato é que eu nunca adotei nenhum padrão para isso. É uma coisa que tem me deixado um pouco incomodado. Em alguns modelos sigo o padrão de um _describe_ para cada método, em outros segui padrões ligeiramente diferentes, como por exemplo testes relacionados a attributos em um _describe_, relacionamentos em outro _describe_ e assim por diante. Ou seja, não há padrão. Há tempos atrás ouvi uma frase que nunca esqueci: 

> Quando dois padrões existem, não há padrão.

No Lucidus usávamos Test::Unit(quando o projeto começou o rspec ainda era muito pouco difundido) então o "padrão" para nós era pelo menos colocar os testes relativos juntos. Então os testes relativos a um mesmo método normalmente estavam juntos, em um "bloco", um abaixo do outro. O rspec nos permite um pouco mais de organização. Mas fazer essa organização extra através dos _describes_ proporciona algum benefício?

Então seguindo a idéia... nós precisamos [discutir][teste1] [testes][teste2].

Qual opnião de vocês? Como vocês organizam seus _describes_? E o que vocês escrevem nele?

[teste1]: http://blog.improveit.com.br/articles/2008/10/26/como-testar-parte-1-models
[teste2]: http://blog.improveit.com.br/articles/2008/11/16/como-testar-parte-2-mocks


