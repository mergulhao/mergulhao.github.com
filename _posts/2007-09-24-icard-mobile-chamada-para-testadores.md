--- 
layout: post
title: 'icard mobile, chamada para testadores'
categories: 
  []
tags:
  - projetos
image: http://mergulhao.info/assets/images/2007/9/24/logo_icard.gif
---

Durante o ano passado tive o prazer de trabalhar numa startup focada em mobile, com pessoas muito legais e fazendo softwares j2me de primeira linha. Infelizmente a startup não deu certo, mas as coisas legais não acabaram. O primeiro desenvolvimento em j2me foi o icard mobile. Trata-se de um pequeno aplicativo j2me que envia cartões de visita virtuais via e-mail. Ele fez um sucesso razoável no exterior, principalmente sudeste asiático, chegando a enviar alguns milhares de cartões por dia.

Através do site, mediante informação do código de registro que se recebe ao efetuar o cadastramento pelo aplicativo, é possível fazer upload de uma imagem que ficará no canto à direita do cartão e também escolher entre 6 cores diferentes de fundo para o seu cartão. É um serviço gratuito e que pode ajudar nas horas em que seu cartão de visita acabou, normalmente nos piores momentos ;). 

<div style="text-align: center">
<img src="http://mergulhao.info/assets/images/2007/9/24/icard_example.png" alt="icard example" style="border: 0px;" />
</div>

Originalmente todo o backend do sistema estava desenvolvido em lua. Durante essa semana, efetuei a migração para Rails e fiz pequenos ajustes necessários na aplicação j2me.

O domínio original do serviço era __www.icardmobile.com__, mas ele foi perdido. Ainda não sei o que farei em relação a isso. Por hora, quem tiver interesse acesse [http://icard.mergulhao.info](http://icard.mergulhao.info) e veja os detalhes.

Espero em breve fazer a internacionalização do site e do aplicativo que no momento estão disponíveis apenas em inglês.

Por favor reportem situações de funcionamento e não funcionamento, enviando para mim a marca, o modelo dos aparelhos testados e os problemas encontrados. Sugestões de novas funcionalidades são bem-vindas. Aguardo o feedback!
