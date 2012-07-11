--- 
layout: post
title: 'Processando emails recebidos no Rails com MailMan'
disqus_id: /2011/1/11/processando-emails-recebidos-no-rails-com-mailman
categories: 
  []
tags:
  - rails
  - email
  - rails3
  - mailman
  - incoming
---


Processar e-mails recebidos em um aplicativo Rails parece uma tarefa complicada. A maioria das soluções disponíveis atualmente envolve a configuração de um servidor de e-mail dedicado só para isso. Não parece ser uma boa idéia.

Quem também acha isso é o Jonathan Rudenberg que junto com mais uma galera, desenvolveu no Ruby Summer of Code do ano passado, o Mailman. Um microframework para processamento de e-mails recebidos.

A funcionalidade é bem simples. Resumindo, você configura uma caixa postal que o Mailman vai varrer e uma callback para ser executada para cada e-mail que corresponder ao critério que você estabelecer.

Um exemplo simples:

    require 'mailman'
    Mailman::Application.run do
      to 'post-%id%@blog.com' do 
        Post.find(params[:id]).comments << Comment.create(:body => message)
      end
    end

Mas vamos devagar. Começando pelo começo.

Como sempre, no seu Gemfile inclua a gem do Mailman:

    gem 'mailman', '0.4.0'

Execute o bundler:

    bundle install

No seu Mailer, defina a callback a ser chamada para os e-mails recebidos:

    class Mailer < ActionMailer::Base
      def receive(email)
        # o seu código entra aqui
      end
    end


Depois disso é necessário configurar o Mailman. Recomendamos a criação de um script (em script/mailman). Como abaixo:

    #!/usr/bin/env ruby
    require File.expand_path('../../config/application', __FILE__)
    require "mailman"

    Mailman.config.poll_interval = 0
    Mailman.config.ignore_stdin = true
    Mailman.config.logger = Logger.new('log/mailman.log')
    Mailman.config.pop3 = {
      :username => 'incoming@example.com',
      :password => '************',
      :server   => 'pop.gmail.com',
      :port     => 995,
      :ssl      => true
    }
    
    Mailman::Application.run do
      to 'dropbox+%domain%+%type%+%type_id%@%host%' do
        UserMailer.receive(message)
      end
    end

Vamos analisar as configurações mais importantes:

**Mailman.config.poll_interval**: define de quanto em quanto tempo o Mailman deve executar. Nós vamos configurar o cron para executar o script/mailman periodicamente, então devemos setar essa configuração para zero. Assim ele vai executar apenas uma vez e sair.

**Mailman.config.ignore__stdin**: essa configuração serve para ignorar e-mails passados diretamente para o Mailman (como no comando: cat plain_message.eml | ruby script/mailman).

**Mailman.config.logger**: seta o arquivo onde você quer que o log seja salvo.

**Mailman.config.pop3**: configura o mailman para usar pop3 como receiver. O Mailman pode ser configurado para trabalhar com três receivers: pop3, standard input ou maildir (onde ele varre uma pasta local a espera de novas mensagens). 

No nosso caso estamos usando o Gmail através do Google Apps.

Logo abaixo vem o método Mailman::Application.run, que é onde a mágica acontece.

Nele nós podemos configurar o que, no linguajar do Mailman, são chamados de 'rotas'. Uma rota consiste em um método ( to, from, cc, subject, body), uma string ou regex e um bloco.

O método diz onde o Mailman vai procurar pela string ou regex, no nosso caso estamos procurando no campo "to" do e-mail. Todo e-mail cujo "to" bater com a string vai ser passada para o bloco. As partes do "to" que forem capturadas pelo parte %domain%, por exemplo, estará disponível no bloco como params[:domain]. A mensagem então é passada para o método receive do Mailer.

Agora, com o script pronto, precisamos nos assegurar que ele rode regularmente no servidor. Para isso existe o Cron, e nós usaremos o Whenever para agendar a execução do script/mailman.

Adicione essas linhas no seu schedule.rb:

    job_type :command, "cd :path && :task :output" # para executar o comando de dentro do aplicativo
    every 1.minute do
      command "script/mailman"
    end

Configure a periodicidade de acordo com sua necessidade e pronto. Não foi tão difícil!


