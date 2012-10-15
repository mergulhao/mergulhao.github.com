--- 
layout: post
title: 'Unresponsive script no selenium'
categories: 
  []
tags:
  - rails
  - firefox
  - selenium
  - javascript
---


No começo da semana no [Lucidus][lucidus], começamos a ter problemas com o [selenium][]. No fim da execução dos testes ele gera um relatório que é interpretado pelo nosso [cruisecontrol.rb][].

O problema é que já possuímos testes **DEMAIS** no selenium, então na hora de gerar o relatório, o firefox dizia aquela mensagem de que "um script em execução não está respondendo....". Quando íamos conferir, nosso build havia falhado por conta disso.

![unresponsive_script](http://mergulhao.info/assets/images/2008/7/11/unresponsive_script.png)

**Solução:** acessar o _about:config_ do firefox e alterar o campo _dom.max\_script\_run\_time_ de 10 (default) para 40, por exemplo.

[lucidus]: http://www.rioonrails.com.br/speeches/projeto-lucidus
[selenium]: http://selenium-on-rails.openqa.org/
[cruisecontrol.rb]: http://cruisecontrolrb.thoughtworks.com/

