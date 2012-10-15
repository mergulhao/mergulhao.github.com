--- 
layout: post
title: 'Inverse Captcha: como não amolar seus visitantes'
categories: 
  []
tags:
  - rails
  - divagando
  - spam
---


Quem tentou acessar meu site em alguns momentos no dia de ontem e hoje há alguns minutos se deparou com alguns [404](http://en.wikipedia.org/wiki/List_of_HTTP_status_codes#4xx_Client_Error) ou [500](http://en.wikipedia.org/wiki/List_of_HTTP_status_codes#5xx_Server_Error). Foi só uma pequena briga entre eu e o [Dreamhost][dh] para atualização do Mephisto, isso vai ficar para o próximo post.

Como muitos de vocês, eu também acho o [Captcha][cap] uma bosta de uma invenção. Infelizmente os ["bots postadores de formulários alheios"][bot] estão importunando cada vez mais e estava precisando de algo que resolvesse esse problema nos comentários do blog.

A questão é: como minimamente garantir que há um humano postando o formulário e não um [bot][bot]? Resolvi pesquisar por algo sobre o assunto e encontrei [coisas](http://damienkatz.net/2007/01/negative_captch.html) [interessantes](http://nedbatchelder.com/text/stopbots.html).

Fazendo o oposto do [Captcha][cap], o conceito do Inverse(ou Negative) Captcha não é fazer o nosso visitante se identificar como humano, mas fazer o [bot][bot] se entregar. Como? Fazendo [a coisa mais simples com chances de funcionar](http://c2.com/xp/DoTheSimplestThingThatCouldPossiblyWork.html). Dentro do formulário há um campo _hidden_ via css. Os [bots][bot] vêem esses campos como _inputs_ comuns, pois eles não interpretam o css. O humano(ou os leitores de tela) ignoram esse campo, pois ele não aparece na tela. Logo, basta ignorar qualquer submissão que vier com o campo _hidden_ preenchido.

<div class="center"><img src="http://mergulhao.info/assets/images/2007/11/6/inverse_captcha.png" alt="Invese Captcha" /></div>

Utilizei o [plug-in para Mephisto][pi] desenvolvido pelo [Sven Fuchs][sf] que implementa essa solução. Simples, não? Vamos ver se funciona.

**ATUALIZAÇÃO:** Ainda não descobri por que, mas parece que o plug-in está apresentando problemas e não está salvando nem os comentários "humanos". Em meu ambiente de teste está funcionando normalmente, estou desconfiado mais uma vez das loucuras do Dreamhost. Qualquer dúvida ou sugestão me enviem um e-mail. Um abraço.

**ATUALIZAÇÃO2:** Problema resolvido, agora está tudo ok. Qualquer problema nos comentários me comuniquem.

[sf]: http://www.artweb-design.de/svenfuchs
[pi]: http://www.artweb-design.de/2007/9/25/inverse-captcha-anti-comment-spam-technique-now-a-regular-mephisto-plugin
[cap]: http://en.wikipedia.org/wiki/Captcha
[bot]: http://pt.wikipedia.org/wiki/Bot
[dh]: http://www.dreamhost.com

