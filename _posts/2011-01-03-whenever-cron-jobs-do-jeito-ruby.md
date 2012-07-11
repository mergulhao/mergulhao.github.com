--- 
layout: post
title: 'Whenever - Cron Jobs do jeito Ruby'
disqus_id: /2011/1/3/whenever-cron-jobs-do-jeito-ruby
categories: 
  []
tags:
  - rails
  - ruby
  - whenever
  - cron
---


Uma das ferramentas mais úteis (até mesmo essenciais, eu diria) no arsenal de um desenvolvedor web são as tarefas do [cron](http://en.wikipedia.org/wiki/Cron). Porém sua sintaxe um tanto quanto estranha intimida muitos desenvolvedores, que acabam subutilizando a ferramenta.

É ai que entra o Whenever, uma DSL ruby para escrever cron job que deixa essa tarefa bem mais fácil.
Para instalar o whenever é necessario um:

    gem install whenever

ou inclua a seguinte linha em seu Gemfile:

    gem 'whenever'

e dê um:

    bundle install

depois disso você precisa navegar até o diretorio do seu projeto e executar:

    wheneverize .

Isso irá criar um arquivo chamado schedule.rb na pasta config.

É nesse arquivo que vão entrar suas tarefas, e é ai que começa a diversão.

Dê uma olhada no seguinte snippet:

    every 2.hours do
     # seu comando entra aqui
    end

É fácil assim.

Você pode ainda passar um segundo parametro para o metodo every especificando o horario que você quer que a tarefa seja executada.

    every 2.days, :at => ‘2am’ do …

O whenever oferece também um metodo ‘rake’ que permite executar rake tasks com facilidade. Por exemplo:

    every :hour do
      rake minha:rake:task
    end

Você pode ainda executar comandos diretamente:

    every 15.minutes do
     command "/usr/bin/comando_qualquer”
    end

Lindo.

Só fique esperto para caso você receba um erro parecido com esse no seu /var/log/syslog:

    Dec 28 02:00:01 toad CRON[23436]: (CRON) error (grandchild #23438 failed with exit status 127)
    Dec 28 02:00:01 toad CRON[23436]: (CRON) info (No MTA installed, discarding output)

Isso significa que o cron não conseguiu encontrar o comando rake no path. Se isso acontecer é só você especificar o path do comando. como abaixo:

    job_type :rake, "cd :path && RAILS_ENV=:environment /usr/local/bin/rake :task :output"


Mais algumas dicas:

Você pode redirecionar o log do whenever para outro arquivo incluindo a linha abaixo em seu schedule:

    set :output, "/path/para/o/seu.log"


Pare integrar o whenerver com o capistrano inclua essas linhas no seu deploy.rb. Assim o cron será atualizado a cada deploy:

    set :whenever_command, "bundle exec whenever"
    require 'whenever/capistrano'

