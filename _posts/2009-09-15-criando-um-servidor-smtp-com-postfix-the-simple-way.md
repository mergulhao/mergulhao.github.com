--- 
layout: post
title: 'Criando um servidor smtp com postfix the simple way'
categories: 
  []
tags:
  - redeparede
  - email
---


## Problema

O Redeparede dispara ~150k e-mails por mês. Não é mailing list, são as ações dos usuários mesmo: cadastro, recuperação de senha, notificação de comentários etc. Nós usávamos um servidor smtp da Engine Yard, mas recentemente movemos para o EC2 da Amazon e lá não temos no plano um servidor smtp. Tentamos usar alguns comerciais comuns, mas todos tinham limite de envio de e-mail por conta. Passamos então a usar o [authsmtp](http://www.authsmtp.com), que é um serviço de smtp especializado, mas a conta começou a ficar cara a medida que estávamos disparando muitos e-mails.

A solução então foi fazer o que eu não queria inicialmente: configurar um smtp próprio. E-mail é sempre um problema. Configurar um servidor se mostrou um problema ainda maior do que eu imaginava. A nossa necessidade é muito simples: precisamos autenticar remotamente num servidor smtp para disparar e-mails. Apenas uma conta autenticada para enviar e-mails. Só isso. Só.

Buscar na internet sobre o assunto retorna [configurações][a1] [megalomaníacas][a2] usando [mysql][a3], [postgresl][a4], mil tipos diferentes de autenticação, mas não tem o simples!

[a1]: http://virtual01.lncc.br/~licht/linux/servidores.postfix.arq.html
[a2]: http://www.unitednerds.org/thefallen/docs/index.php?area=Postfix&tuto=Postfix-Postfix_SASL_POP3_Virtual
[a3]: http://articles.slicehost.com/2008/9/2/mail-server-configuring-postfix-to-use-mysql-part-2
[a4]: http://codepoets.co.uk/postfixadmin-postgresql-courier-squirrelmail-debian-etch-howto-tutorial

Vamos ao trabalho.

## DNS reverso

Você precisa ter o dns reverso configurado, sem isso todos os seus e-mails vão para caixa de spam. Você tem que verificar no lugar onde seu servidor está hospedado como configurar o reverso. No caso do [Slicehost](http://slicehost.com), onde hospedamos o nosso smtp, isso é configurado a partir de uma interface web bem simples. Para saber se está funcionando é só digitar no console:

    dig -x 67.23.23.229 (substitua pelo ip do seu servidor, claro ;)

A resposta tem que ser algo parecido com:

    ; <<>> DiG 9.5.0-P2 <<>> -x 67.23.23.229
    ;; global options:  printcmd
    ;; Got answer:
    ;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 57850
    ;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 2, ADDITIONAL: 2

    ;; QUESTION SECTION:
    ;229.23.23.67.in-addr.arpa.	IN	PTR

    ;; ANSWER SECTION:
    229.23.23.67.in-addr.arpa. 86400 IN	PTR	smtp.redeparede.com. # <=== essa linha que importa, ela está dizendo que o nosso ip está apontando para o endereço correto

    ;; AUTHORITY SECTION:
    23.23.67.in-addr.arpa.	3600	IN	NS	ns2.slicehost.net.
    23.23.67.in-addr.arpa.	3600	IN	NS	ns1.slicehost.net.

    ;; ADDITIONAL SECTION:
    ns1.slicehost.net.	95375	IN	A	67.23.4.57
    ns2.slicehost.net.	88271	IN	A	173.45.224.132

    ;; Query time: 158 msec
    ;; SERVER: 201.17.0.114#53(201.17.0.114)
    ;; WHEN: Tue Sep 15 13:42:16 2009
    ;; MSG SIZE  rcvd: 157

Caso você não possua o __dig__ instalado:

    sudo aptitude install dnsutils

## Configurando o SPF

O SPF é uma entrada TXT no DNS que diz quais servidores estão autorizados a enviar e-mails do seu domínio. Esse registro é consultado pelo servidor que recebe seu e-mail e isso ajuda a você não cair na caixa de spam. No nosso caso os servidores são do Google e o nosso próprio smtp. A linha fica assim:

    "v=spf1 a mx include:smtp.redeparede.com include:aspmx.googlemail.com include:_spf.google.com ~all"

## Instalando e configurando o Postfix

Nós queríamos a configuração mais simples de todas. O que conseguimos foi fazer o postfix autenticar usando a própria base de usuários/senhas do sistema. Para simplificar as coisas eu fiz um script que executa os passos em sequencia. Baixe e execute como root num servidor limpo. Foi testado apenas no Ubuntu 9.04 (Jaunty Jackalope).

<code>
<a href="/assets/images/2009/9/15/install_and_configure_postfix_ubuntu.sh">install\_and\_configure\_postfix\_ubuntu.sh</a>
</code>

Primeiro vai pedir o seu domínio. Assumi que o servidor será smtp.seudominio.com, se não for esse o seu desejo, edite o script e mude na mão. Na instalação do postfix ele vai perguntar algumas coisas, basta selecionar as opções padrão. Depois vai perguntar sobre chaves, isso faz parte da criptografia TLS. Eu não sei se essas senhas que digitamos na chave servem pra alguma coisa. Na dúvida anote-as em algum lugar, mas acho que não vai precisar delas pra mais nada. Quando o script terminar de rodar tudo já vai estar configurado e funcionando! Abra um cliente de e-mail como o Evolution e teste enviar um e-mail autenticando no seu novo servidor usando login e senha de algum usuário do sistema.

Abra o script e veja o que foi feito. O tutorial que me ajudou a escrever o script foi esse aqui: [http://www.howtoforge.com/perfect\_setup\_debian\_sarge\_p4](http://www.howtoforge.com/perfect_setup_debian_sarge_p4)

Se você conhece algum outro servidor smtp que faça isso de forma mais simples, por favor, não deixe de compartilhar.



