--- 
layout: post
title: 'Meu primeiro TDD'
categories: 
  []
tags:
  - rails
  - xp
  - tdd
---


A um mês aproximadamente estudo [Extreme Programming][xp] e suas práticas. Das práticas que estão relacionadas à programação em si, o desenvolvimento guiado pelos testes é sem dúvida aquela que causa mais impacto em quem está habituado ao "desenvolvimento tradicional". Estou convencido de que a utilização dessa prática é base para um software de qualidade, livre de bugs. Diante disso resolvi começar meu primeiro projeto usando TDD - Test Driven Development. A plataforma: Rails.

O desenvolvimento guiado por testes ainda não é uma prática muito comum, e na internet achar informação útil também não é tão simples, mesmo tendo o Rails um framework completo de testes embutido. Resolvi comprar o screencast sobre TDD do [Peepcode][pcode]. Além do screencast, o pacote também contém todo o código desenvolvido e alguns plugins. Então se você está começando agora com TDD e Rails vão algumas dicas.

## autotest ####

Esse é essencial. para instalar como um gem:

     sudo gem install ZenTest 

Dentro do diretório do seu projeto Rails digite:

     autotest

Ele fica monitorando quando algum arquivo é alterado e roda o teste necessário, se algum dos testes falha pode-se ver na mesma hora. Basta deixá-lo rodando num terminal a parte de forma que se possa colocá-lo em foreground com um Alt+Tab ou coisa assim.

O desenvolvimento fica bem dinâmico com ele. Você escreve o teste, escreve a funcionalidade e ao salvar o arquivo já está rodando no terminal o teste e você descobre na hora se tá ok ou não.

## redgreen ####

Esse aqui é bom pois colore a saída de texto dos testes. Se algum teste falha ele mostra em vermelho. Se o teste passa ele exibe em verde, então identifica-se visualmente sem precisar ler de fato o retorno na tela.

     sudo gem install redgreen

E acrescentar no fim arquivo _config/environments/test.rb_ a linha:

<pre><code>require 'redgreen'</code></pre>

## topfunky power tools ####

É um plugin muito legal pro Rails, que adiciona alguns atalhos para tasks de teste e também adiciona vários métodos de assert além dos que já estão disponíveis no Ruby e no Rails. Para instalar, dentro do diretório _vendor/plugins_

     svn co http://topfunky.net/svn/plugins/topfunky_power_tools/

[xp]: http://en.wikipedia.org/wiki/Extreme_Programming
[pcode]: http://peepcode.com/products/test-first-development

