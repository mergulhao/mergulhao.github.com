--- 
layout: post
title: 'Litespeed como proxy para o Apache servir SVN'
disqus_id: /2008/5/3/litespeed-como-proxy-para-o-apache-servir-svn
categories: 
  []
tags:
  - apache
  - scm
  - svn
  - litespeed
---


No [vps][sr] estou utilizando [Litespeed][ls] como servidor web. [Neste link][tut] estão disponíveis vários tutoriais para configuração básica do Litespeed, então não vou entrar neste mérito, pois não iria acrescentar nada mais do que já está lá.

O Litespeed é um ótimo servidor web para projetos Rails. Fácil de instalar e usar, com interface web para configurar TUDO que existe nele, consome muito pouca memória, aguenta o tranco de conexões simultâneas etc --- não sei o que as pessoas ainda fazem perdendo tempo configurando Apache + mongrel_cluster, pois o Litespeed resolve isso muito bem sem utilizar mongrel.

Ele tem um problema. Não serve SVN como o Apache faz. Mas ele é um servidor web completo e possui opções para fazer proxy. A solução então é configurar um Apache rodando em uma porta diferente da 80 e fazer o Litespeed direcionar certas urls para o Apache. Assim:

<a href="http://mergulhao.info/assets/2008/5/3/ls_apache_rails.png"><img src="http://mergulhao.info/assets/2008/5/3/ls_apache_rails.png" alt="litespeed proxy" /></a>

Primeiro é necessário adicionar uma "External App". Na página principal de administração do Litespeed clicar em "Configuration", em "External App" e por último em "Add".

![step_1](http://mergulhao.info/assets/2008/5/3/ls_step1.png)

![step_2](http://mergulhao.info/assets/2008/5/3/ls_step2.png)

A seguir selecione "Web Server" e dê "Next". Agora preencha um nome para esse Web Server --- eu usei apache\_local --- e no campo Address preencha o url do seu servidor web: ip_ou_host:porta. Os demais campos são tunning, configure como desejar. Basta salvar.

![step_3](http://mergulhao.info/assets/2008/5/3/ls_step3.png)

Agora abra a aba de configuração do seu virtual host (vai depender se você está utilizando templates ou não) e clique na aba "Context" e depois em "Add". Selecione "Proxy" e dê "Next".

![step_4](http://mergulhao.info/assets/2008/5/3/ls_step4.png)

Agora preencha a "URI" e selecione o "Web Server" já configurado. O campo "URI" representa o caminho acessado no seu site e que será direcionado para o "Web Server" nesse mesmo "URI". Não pesquisei sobre como direcionar para o "Web Server" em um caminho diferente.

![step_5](http://mergulhao.info/assets/2008/5/3/ls_step5.png)

Agora é só reiniciar o Litespeed. O svn em [http://mergulhao.info/svn/](http://mergulhao.info/svn/) está funcionando dessa maneira.

[tut]: http://www.usefuljaja.com/litespeed
[ls]: http://litespeedtech.com/
[sr]: http://www.silverrack.com

