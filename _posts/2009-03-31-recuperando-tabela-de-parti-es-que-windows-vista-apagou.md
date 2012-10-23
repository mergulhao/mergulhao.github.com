---
layout: post
title: 'Recuperando tabela de partições que Windows Vista apagou'
categories:
  []
tags:
  - linux
  - ferramentas
image: /assets/images/2009/3/31/harddisk.jpg
---

Pensei no título desse post em algo como "Micro$oft, a saga continua agora em outra galáxia" ou algo assim, mas resolvi fazer uma coisa mais informativa. Sei que muita gente passa por isso e nem sempre é fácil achar informação válida sobre o assunto.

Meu mais recente notebook veio com Windows Vista. Quando instalei Linux nele resolvi deixar o Vista lá para caso eu precisasse ver alguma coisa no IE. Ficou por alguns meses numa boa com o dual boot rolando sem problemas. Até que um dia eu precisei entrar no Windows ele não deu boot: tela azul e restarta sozinho sem que eu consiga ver a mensagem de erro. Deixei ele de lado lá...

Hoje precisei usar IE para debugar um javascript que está dando problema somente nele. Resolvi colocar o CD de recovery do Windows para ver se ele dava sinal de vida. Conclusão sem me perguntar nada ele disse: formatando... copiando arquivos... Nisso eu pensei: puts ferrou! Dei reboot antes que ele passasse por cima das minhas partições Linux. Ubuntu Live CD to the rescue! Dei boot num Ubuntu Live CD e a "recuperação" de fato tinha apagado todas as partições e criado uma única novamente somente para o Windows. Ok, sem pânico.

Última vez que passei por problema semelhante foi há uns 10 anos atrás, quando meu Windows foi infectado pelo vírus [Chernobyl(CIH)][CIH]. Esse vírus ficava quietinho na sua máquina e somente agia se você ligasse ela num dia 26 de abril, [aniversário do acidente nuclear][acidente] na Ucrânia. Ele apagava o primeiro megabyte do seu disco rígido. Com isso ia pro espaço seu boot loader e sua tabela de partições. Depois desse dia eu exterminei o Windows da minha vida e passei a usar somente Linux.

Google é nosso amigo. Na época eu consegui um software que varria o disco e procurava por partições perdidas e depois recriava a tabela de partições. Se eu consegui resolver esse mesmo problema há tanto tempo atrás, não devia ser tão dificil resolver nos dias de hoje. E realmente não foi. Achei dos programas de código aberto para fazer o trabalho: [gpart][] e [TestDisk][].

Eu optei por usar o [TestDisk][], me pareceu ser mais completo. Ele demorou cerca de 30 minutos para fazer o scan no disco de 160gb. Detectou todas as minhas 3 partições Linux (swap, uma de sistema que fica no "/" e outra que uso como "/home"). Foi só marcar elas como primárias novamente e salvar a nova tabela de partições. É preciso dar um boot no Live CD para o sistema reler a tabela de partições (na verdade tem uma forma de fazer isso sem boot, mas eu esqueci como é). Por último é só [restaurar o GRUB][grubrecover] a partir do Live CD do Ubuntu.

Depois disso o Ubuntu apagado pelo Windows rolou numa boa e eu deixei o Windows de mão de novo. Ô sisteminha...

Links legais:

 * [TestDisk][]
 * Site do [TestDisk][]. Eles também tem uma ferramenta específica para recuperação de fotografias em mídias diversas.
 * [System Rescue with Knoppix](http://greenfly.org/talks/knoppix/rescue.html)
 * Foi aqui que eu descobri o gpart. As [outras apresentações](http://greenfly.org/talks/) também são muito boas.
 * [Insert Linux](http://www.inside-security.de/insert_en.html)
 * Mini distro baseada no knoppix, com foco na resolução desses desastres. Ela já vem com o [gpart][] e [TestDisk][] instalados. No Ubuntu Live CD eu tive que instalar via apt-get(sim você pode instalar pacotes num boot de live cd do ubuntu, mas perde tudo após um reboot claro;)

[acidente]: http://en.wikipedia.org/wiki/Chernobyl_accident
[CIH]: http://en.wikipedia.org/wiki/CIH_virus
[gpart]: http://en.wikipedia.org/wiki/Gpart
[TestDisk]: http://www.cgsecurity.org/wiki/TestDisk
[grubrecover]: https://help.ubuntu.com/community/RecoveringUbuntuAfterInstallingWindows
