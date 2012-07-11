--- 
layout: post
title: 'Invente menos problemas!'
disqus_id: /2008/1/12/invente-menos-problemas
categories: 
  []
tags:
  - rails
  - divagando
  - xp
---


<img alt="Invente menos problemas" src="http://mergulhao.info/assets/2008/1/12/invente_menos_problemas_1.jpg" class="float-right"/>

O [açucar União][uniao] está com uma campanha publicitária chamada **Viva Momentos de União**, que possui mensagens que fazem alusão a situações de prazer e bem-estar, realçando a importancia da qualidade de vida e tudo mais. Não se preocupem, não vou escrever sobre açucar!

No [projeto Lucidus][lucidus] os nossos sachês de açucar pro café são da [União][uniao] e cada um vem com uma mensagem, entre elas essa que eu achei brilhante:

> Invente menos problemas.

E aí isso me remete, como desenvolvedor, ao nosso velho problema de querer sempre complicar as coisas. Há um bom tempo que estudo [XP][xp], mas foi somente nos últimos meses que tive a oportunidade de ver na prática como a coisa funciona. Desde que entrei para o [projeto Lucidus][lucidus] meus conceitos sobre como desenvolver software mudaram muito, do meu ponto de vista para melhor, claro.

[XP][xp] possui como um de seus [valores][valores] a [simplicidade][simplicidade]. A idéia é implementar as coisas da forma mais simples possível, sem preocupar-se com o amanhã ou com tentar prever quais funcionalidades, métodos ou funções serão necessárias no futuro. É preocupar-se apenas em resolver o problema de agora de forma simples. Isso puxa(ou o inverso) uma das práticas do [XP][xp], o [design incremental][design].

Quando estudei [engenharia de software tradicional][es] na [universidade][unirio] "aprendi" que o design deveria ser sempre feito antes da implementação. Então deveria-se planejar(o sistema, as classes, os patterns, a base de dados, os relacionamentos, etc) numa tentativa de prever o rumo que o projeto iria levar. Felizmente aprendi cedo de que isso na teoria é muito bonito, mas na prática não funciona. Quer queiram ou não, os projetos de software sempre sofrem mudanças na hora da implementação. Mudanças essas que podem ser drásticas a ponto de toda documentação/projeto que foi escrito não servir mais para nada, por não refletir a realidade do projeto.

Quando em [XP][xp] dizemos que trabalhamos com [design incremental][design] do software, não estamos dizendo que não usamos patterns... Isso apenas quer dizer que decidimos que patterns utilizar na hora em que de fato precisarmos dele. O uso contínuo da [refatoração][refatoracao] nos leva aos patterns.

Há alguns anos atrás eu trabalhava(leia-se ganhava dinheiro) apenas com Java e, por coincidência ou não, muitas das pessoas com que trabalhei e empresas por onde passei possuiam essa mesma cabeça da [engenharia de software tradicional][es] e passavam meses **projetando** e montando o ambiente de trabalho antes de que qualquer linha de código útil fosse escrita.

Felizmente, mais uma vez, há 2 anos eu descobri o [Ruby][ruby] e o [Rails][rails]. Descobri que as pessoas que trabalham com [Ruby][ruby] e [Rails][rails] seguem fielmente a linha da [simplicidade][simplicidade], dos princípios [DRY][dry] e [KISS][kiss]. Descobri que [Rails][rails] se encaixa como uma luva no [XP][xp]. Então a frase do dia é:

> Invente menos problemas. Use Rails!

[uniao]: http://www.ciauniao.com.br/
[lucidus]: http://www.rioonrails.com.br/speeches/projeto-lucidus

[xp]: http://www.improveit.com.br/xp
[valores]: http://www.improveit.com.br/xp/valores
[simplicidade]: http://www.improveit.com.br/xp/valores/simplicidade
[design]: http://www.improveit.com.br/xp/praticas/design_incremental

[es]: http://pt.wikipedia.org/wiki/Engenharia_de_software
[unirio]: http://www.uniriotec.br
[rails]: htt://www.rubyonrails.org
[refatoracao]: http://www.improveit.com.br/xp/praticas/refatoracao

[dry]: http://en.wikipedia.org/wiki/Don't_repeat_yourself
[kiss]: http://en.wikipedia.org/wiki/Keep_it_Simple_Stupid
[ruby]: http://www.ruby-lang.org/


