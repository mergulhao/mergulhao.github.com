--- 
layout: post
title: 'Colecionar débitos técnicos não é maneiro não'
categories: 
  []
tags:
  - xp
  - rspec
---


Depois de um tempo sem postar, lá vamos nós de novo ;). Quem assina o feed provavelmente recebeu uma atualização sobre esse post antes do que devia! Eu esqueci de marcar ele como rascunho e aí ficou a manhã toda o post publicado apenas com um smile. Depois do furo não tive outra opção a não ser escrever o post até o final o mais rápido possível.

Após participar de inúmeros projetos e de formas de gerencia sobre os projetos tenho chegado a algumas conclusões sobre a questão dos débitos técnicos, refatoração e testes.

No começo do V2V, projeto do [Portal do Voluntário][pv], muito código novo foi escrito em cima de um código que usamos como base. Toda alteração de código era devidamente testada usando Rspec. Por considerar que alguns testes não eram muito importantes, as vezes eu deixava a spec como pending para fazer uma posterior implementação. Assim podia entregar as coisas um pouco mais rápido. De fato isso aconteceu em apenas uma meia dúzia de specs, ainda bem!

O fato é que hoje, 9 meses depois do sistema estar em produção, e já com 3 grandes clientes utilizando -- rumando para o quarto -- a mesma meia dúzia de specs continuam como pending.

Esse quadro é comum acontecer também em relação aos débitos técnicos dos projetos. O que é um débito técnico? É um empréstimo que você faz, inserindo alguma coisa mal feita no sistema -- leia-se [POG][] -- com objetivo de ganhar um pouco de tempo naquele momento. É um empréstimo pois ele pode ser comparado ao empréstimo bancário. Você pega um dinheirinho e aquilo tem um juros. Quanto mais tempo você leva pra devolver aquele dinheiro pro banco mais você paga de juros. No nosso caso quanto mais tempo levamos para remover os débitos técnicos mais tempo perdemos por causa dele.

Assim como as minhas 6 specs pendentes, é comum que débitos técnicos se prolonguem por toda a vida do projeto causando muito mais transtornos do que seria corrigi-los na época em que isso faria atrasar a entrega em apenas um dia.

Em alguns dos projetos que trabalhei às vezes separávamos uma semana para "arrumar a casa". Ou seja: quitar os débitos técnicos que foram se criando com objetivo de fazer entregas mais rápidas. Uma semana de projeto no lixo sem nenhuma funcionalidade nova! Essa não é a forma correta de fazer.

Se você estimou o desenvolvimento de uma funcionalidade em uma hora e tem um débito técnico te atrapalhando que vai fazer você demorar duas horas a mais para quitá-lo, essa é a hora de quitá-lo. Não faça mais uma [POG][]! Pegar mais um empréstimo nessa hora vai fazer você pagar juros sobre juros e isso irá te atrapalhar mais na semana seguinte.

A refatoração é um processo contínuo e _on the fly_.

[V2V]: http://v2v.org.br
[pv]: http://portaldovoluntario.org.br
[POG]: http://desciclo.pedia.ws/wiki/POG


