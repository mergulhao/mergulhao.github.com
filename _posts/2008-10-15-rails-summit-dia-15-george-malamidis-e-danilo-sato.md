--- 
layout: post
title: 'Rails Summit dia 15: George Malamidis e Danilo Sato'
categories: 
  []
tags:
  - rails
  - eventos
  - railssummit
---


Foram desenvolvidos de diversos aspestos sobre REST, o principal foi o uso do REST para prover serviços, suas limitações e formas de escalar. Por fim o REST foi comparado com outros protocolos para prover serviços e enviar mensagens, como SMTP e XMPP. Esse tipo de protocolo pode ser mais escalável que prover serviços em REST dependendo do que se deseja.

No fim da palestra apareceu uma pergunta interessante que questionou se o serviço do Flickr era REST ou não. O questionamento foi em relação aos resources do Flickr não utilizarem a formatação clean das URLs como no Rails, mas passando parâmetros na URL da forma convencinal para informar a action desejada. O George defendeu que os serviços do Flickr são REST sim, apenas não utilizam a mesma formatação de URLs Rails. Na opnião dele se são recursos que podem ser acessados e _cacheados_ então ele considera sim como sendo um recurso.

