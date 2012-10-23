--- 
layout: post
title: 'V2V Procura por desenvolvedores Rails'
categories: 
  []
tags:
  - oportunidades
image: /assets/images/2009/1/22/v2v-logo.png
---

O [Portal do Voluntário][pv] é um projeto que incentiva ações de voluntariado no âmbito nacional. Lá foi desenvolvida uma rede social chamada [V2V][]. Inicialmente era um projeto em php, sem testes e difícil de manter. Quando eu saí do [Lucidus][], o [Fernando][] me convidou para integrar a equipe dele e iniciar o desenvolvimento da nova versão do [V2V][], utilizando Rails e todas as boas práticas de desenvolvimento, testes etc.

Quem começou o trabalho foi o Eduardo Rocha com um projeto de prova de conceito, eu dei continuidade. Em menos de 6 meses já possuímos dois sites no ar utilizando o novo sistema, entre eles o próprio site do [Portal do Voluntário][pv]. E o trabalho está apenas começando, há muita coisa para fazer!

No antigo sistema em php, havia uma instância da aplicação para cada site que o utilizava. No novo sistema em Rails temos apenas uma instância da aplicação e que terá que suportar o site de todos os clientes do [Portal do Voluntário][pv] que utilizam o [V2V][]. Será um desafio e tanto... Antes da entrada do terceiro site, que acontecerá em março, já começaremos a utilizar cache de fragmento em algumas partes específicas do site como a nuvem de tags. Em seguida, provavelmente passaremos pelo memcached e, por último, quero chegar no cache de página, mesmo com sistema respondendo por vários domínios.

Ou seja: é uma oportunidade única de trabalhar num projeto em Rails, desenvolvido da forma correta desde do zero e que fatalmente terá que escalar. Devido as minhas outras atribuições no [Redeparede][rp], eu não tenho como me dedicar mais ao [V2V][] e não estou dando conta sozinho de todas as tarefas.

Procuramos um desenvolvedor Rails com alguma(ou muita) experiência para trabalhar alocado full-time em nossa sede no Jardim Botânico, Rio de Janeiro. Dessa vez não tem como ser remoto. Além de trabalhar no desenvolvimento do projeto, também irá contribuir no treinamento da atual equipe de 5 desenvolvedores que mantém o antigo sistema em php.

Nas próximas semanas faremos a reorganização da nossa sala, que será preparada para ficar nos moldes do [XP][]. O ambiente é informal e descontraído, sem dúvida um ótimo lugar para trabalhar.

Interessados entrem em contato em pvt.

[XP]: http://www.improveit.com.br/xp
[rp]: http://redeparede.com.br
[Lucidus]: http://blog.improveit.com.br/articles/2007/05/15/xp-rio-conheca-o-projeto-xp-do-grupo-santa-isabel
[Fernando]: http://github.com/elefante
[V2V]: http://v2v.org.br
[pv]: http://portaldovoluntario.org.br
