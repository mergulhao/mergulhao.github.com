--- 
layout: post
title: 'Criando uma nova aplicação a partir de gem antiga do Rails'
categories: 
  []
tags:
  - rails
---


Parece uma bobeira, mas não achei documentação sobre isso. Hoje quis gerar um projeto Rails utilizando o Rails 1.2.6 que ainda tenho instalado aqui na minha máquina. O problema é que eu tenho versões do Rails mais novas (2.0.2 e 2.1) instaladas também e ele sempre roda a última versão no comando *rails*. Lendo o executável descobri que basta fazer:

    rails \_1.2.6\_ projeto

Sim é exatamente como o comando está aparecendo, com os underscore e tudo. Vai entender...

