--- 
layout: post
title: 'Sistema de inscrições e eu'
disqus_id: /2007/9/25/sistema-de-inscricoes-e-eu
categories: 
  []
tags:
  - divagando
---


Durante todos os outros anos do [Fórum do Software Livre do Rio de Janeiro][forum] utilizávamos um sistema de inscrições que era feito em PHP. Esse sistema já havia sido adaptado ao nosso evento, resgatado de um outro evento de estudantes de computação. Todo ano novas modificações para ele se adaptar às novas necessidades. Esse ano decidi escrever mesmo uma outra aplicação e não poderia ser diferente, escolhi [Rails][rails] como framework base.

O grande problema que criei por essa minha decisão foi: onde hospedar? A nossa parceira [Hostnet][hn] ainda não fornece serviço de hospedagem para [Rails][rails] e na [Unirio][ur] não tínhamos nenhum servidor preparado para isso. Sobrou hospedar juntamente com meu site, no [Dreamhost][dh]. Após 3 ou 4 dias com o sistema no ar estávamos tendo muitas reclamações referentes ao desempenho. Lento, __muito__ lento (coisa que não acontece com o site principal não sei o motivo). E claro, com alguns momentos down.

__Solução 1__: preparar um servidor na [Unirio][ur]. Sistema que estava instalado no servidor disponível: Fedora Core 4. Se alguém conhece Fedora sabe que isso está __muito__ desatualizado. Ou seja, um monte de pacotes antigos, apache antigo, ruby antigo, sem adaptador mysql para ruby etc. <span class="red"><strong>DESCARTADO!</strong></span>

__Solução 2__: propus levantar um servidor virtual com [Ubuntu][ubuntu] server e recursos modestos que eu me encarregaria de configurar tudo. Duas horas depois de receber o acesso ssh para configurar o servidor (e já 3h da manhã de algum dia da semana passada) estava tudo no ar, com apache rodando Rails utilizando fastcgi. Não me atrevi a colocar em mongrel, pois não li nenhuma documentação sobre ele ainda. <span class="green"><strong>IMPLANTADO!</strong></span>

Ok, até então se saindo muito bem. Até que no último domingo, dia 23, faltou luz na [Unirio][ur] por 4 horas. O no-break, claro, não segurou, sem gerador... foi tudo por água abaixo. Quase metade do dia com o serviço fora do ar, pois os servidores precisavam ser religados e entrar domingo numa Universidade pública não é algo trivial, muito jogo de cintura com os seguranças e ligações telefônicas até conseguir liberação para fazer coisa que dura 5 minutos.

Enfim... voltou ao ar no fim da noite... Valeu Max!

[dh]: http://www.dreamhost.com
[forum]: http://www.forumsoftwarelivre.org.br
[rails]: http://www.rubyonrails.org
[hn]: http://www.hostnet.com.br
[ur]: http://www.uniriotec.br
[ubuntu]: http://www.ubuntulinux.org

