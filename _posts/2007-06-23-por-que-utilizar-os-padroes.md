--- 
layout: post
title: 'Por que utilizar os padrões web?'
categories: 
  []
tags:
  - webstandards
---


## O problema

Por unanimidade, todos os projetos em que entrei para dar manutenção (ou seja: com o bonde andando!) eram o caos em relação aos padrões web. Acredito que existem algumas explicações para isso, mas uma muito importante é que os gerentes(ou as pessoas responsáveis) esquecem que desenvolvedores não são webdesigners... e simplesmente ignoram o papel do webdesigner, nem estimando o custo da sua hora de trabalho no projeto. Com sorte uma empresa ou profissional é contratado no começo para fazer o layout inicial e pronto.

Me refiro à webdesigner como a pessoa que realmente entende de como fazer layouts para a web(seguindo os padrões!) e não aquele que simplesmente sabe fazer coisas bonitinhas no Gimp, Photoshop ou semelhantes e depois corta a imagem toda e cola tudo no Dreamweaver num layout 100% tabela. Isso pra mim não é webdesigner. Essa pessoa pode até ser uma boa designer... daí a ser uma boa __web__designer há muito chão. Outros pontos que contam muito na avaliação de um webdesigner são os seus conhecimentos sobre usabilidade e acessibilidade.

Para piorar as coisas ainda há os desenvolvedores que se acham os melhores webdesigners da terra! Sabem tudo de html... Aliás, html? Já deveriam saber que agora se usa xhtml, de preferência strict. E o que vejo nos projetos são folhas de estilo (CSS) mal planejadas, que não abrangem todo o escopo do site ou do sistema, desenvolvedores que não sabem utilizá-las e no fim um sistema onde para você alterar o modo como um cabeçalho é exibido é necessário alterar em dezenas ou centenas de lugares.

## Uma outra perspectiva

O que estou querendo dizer é que utilizando os padrões web, além de você produzir uma página da maneira correta em relação ao agente (navegador), você também melhora (__MUITO!__) a produtividade do desenvolvimento independentemente da plataforma utilizada. Os seus desenvolvedores não vão ter que ficar se preocupando com alinhamento, cores e tamanhos de fontes... isso é trabalho para o webdesigner! Ou seja: quando fizer a estimativa de custo para o projeto inclua o custo de um webdesigner. Ele deve estar presente durante todo o projeto.

Muitos irão dizer que manter um webdesigner durante todo projeto é caro demais, um exagero! Mas e quem disse que desenvolver um software de qualidade(por dentro e por fora!) é barato? Pegue qualquer bom software livre e faça uma estimativa de custo baseada na quantidade de linhas de código(não esqueça de utilizar um fator de correção para a linguagem em que foi desenvolvido), e verá que não é nada barato.

Neste [vídeo][video] o pessoal da [Improve It][improveit] fala a respeito de quão eficiente se torna o trabalho do desenvolvedor quando se possui um designer de interface trabalhando junto com a equipe.

[improveit]: http://www.improveit.com.br/podcast
[video]: http://www.youtube.com/watch?v=h9AbvKMu_us

## Acessibilidade

Se o seu site ou sistema segue os padrões web, ele já está a meio caminho andado para acessibilidade. Este site não é um primor na acessibilidade, tenho conhecimento disso e tentarei sempre melhorá-lo, mas sei que ele está anos-luz na frente de 90%(talvez mais...) da web.

Leia e assista ao vídeo do [Bruno Torres][bt].

[bt]: http://brunotorres.net/acessibilidade-na-web-custo-ou-beneficio

## Compatibilidade

O maior pesadelo de todos que desenvolvem para a web: a compatibilidade entre os diversos navegadores do mercado. Se você é programador ou já programou alguma vez na vida e ainda não se convenceu, agora irá mudar de idéia.

O que acontece se você programa alguma coisa com erros de sintaxe? O compilador ou interpretador irá abortar em algum momento informando que houve um erro de sintaxe, provavelmente informando em qual linha ocorreu o problema. Imagine se a cada erro de sintaxe encontrado ele tentasse advinhar o que você quis fazer com aquilo e resolvesse por você? Pois é isso que acontece quando o navegador recebe um código html/xhtml não válido. Ele entra num modo de compatibilidade, chamado de quirks e tenta adivinhar o que você quis fazer. Como cada navegador interpreta o que você quis fazer de uma maneira diferente, em cada navegador vai aparecer de uma maneira.

Quando o navegador está em modo strict, ou seja, quando a entrada foi um código válido, a chance de sua página ser exibida de forma mais parecida nos diversos navegadores é maior. É sabido que o IE6 ainda é um grande problema em relação aos padrões web, mas o IE7 felizmente resolveu boa parte deles, Firefox/Mozilla e Opera são bem complacentes com os padrões.

## Para finalizar

O link para o validador da W3C no rodapé não está ali de bobeira. Por favor, se você verificar que o site não validou em alguma situação, não exite em me informar para que eu possa corrigir. Uma boa ferramenta para auxílio a esses casos seria um robô que validasse todo o site de tempos em tempos e notificasse o administrador em caso de problemas, vou verificar se existe algo já desenvolvido nesse sentido.

