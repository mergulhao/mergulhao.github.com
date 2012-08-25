--- 
layout: post
title: 'Dreamhost deploy com capistrano'
categories: 
  []
tags:
  - rails
  - capistrano
  - deploy
---


Realmente o capistrano me surpreendeu bastante pela utilidade e facilidade de uso. Assim que possível vou passar a realizar deploy de todos os meus sistemas/sites/etc que estão rodando na web utilizando ele --- inclusive os que não rodam em Rails! O teste dessa vez foi no [sistema de inscrições do Fórum de Software Livre](/projetos) desse ano. Quem quiser testar para ver como está ficando e sugerir mudanças acessar: [http://inscricao.mergulhao.info](http://inscricao.mergulhao.info).

Deixo aqui um passo a passo para quem quer fazer deploy de uma aplicação utilizando [Capistrano](http://www.capify.org) e o [Dreamhost](http://www.dreamhost.com) (pode facilmente ser adaptado para outros hosts). Antes de tudo, [instale o capistrano](http://www.capify.org/install). Caso não esteja utilizando o [Dreamhost](http://www.dreamhost.com), certifique-se que o seu servidor possui o [svn](http://subversion.tigris.org/) cliente de linha de comando instalado.

**ATENÇÃO: Todos os comandos aqui listados são executados em seu ambiente local de desenvolvimento.**

1. Crie um subdomínio/domínio no painel de controle do Dreamhost, habilite o fastcgi e aponte o diretório web para algo semelhante:

   /home/USUARIO/sistema.dominio.com/current/public

2. Acesse a sua conta via ssh e apague o diretório _current_ que foi criado pelo Dreamhost em _/home/USUARIO/sistema.dominio.com/_

3. Siga [esses passos](http://wiki.dreamhost.com/SSH#Passwordless_Login) se desejar efetuar o deploy sem a necessidade de digitar a senha do ssh a todo momento.

4. Configure seu _config/enviroment.rb_ para modo produção e o _config/database.yml_ com a base de produção.

5. Substitua seu _public/dispatch.fgci_ por esse(dica pega do [Klaus](http://blog.klaus.pro.br/ler/ruby-on-rails/2007/ruby-on-rails-na-dreamhost/7/index.html)):

<pre><code>
#!/usr/bin/ruby1.8
require File.dirname(__FILE__) + "/../config/environment"
require 'fcgi_handler'

class RailsFCGIHandler
  private
    def frao_handler(signal)
      dispatcher_log :info, "asked to terminate immediately"
      dispatcher_log :info, "frao handler working its magic!"
      restart_handler(signal)
    end
  alias_method :exit_now_handler, :frao_handler
end

RailsFCGIHandler.process! nil, 6
</code></pre>

6. Configure seu _public/.htaccess_ de acordo, substituindo a linha:

<pre><code>
RewriteRule ^(.*)$ dispatch.cgi [QSA,L]
</code></pre>

Por:

<pre><code>
RewriteRule ^(.*)$ dispatch.fcgi [QSA,L]
</code></pre>

7. Rode o capify no diretório de desenvolvimento da sua aplicação:

    capify .

8. Utilize a receita abaixo(_config/deploy.rb_) configurando-a de acordo:

<pre><code>
# Receita de deploy de apps Rails para o Dreamhost. Capistrano V2.
# Pode ser facilmente adaptada para outros hosts compartilhados.
# Por Sylvestre Mergulhao em 20/08/2007
# Email: contato (at) mergulhao.info
# Site: http://mergulhao.info

# Define o nome da aplicacao e o dominio a qual estara linkada no dreamhost
set :application, "inscricao.mergulhao.info"

# Define seu usuario no dreamhost
set :user, "mergulhao"

# Define o local do seu repositorio svn
set :repository,  "http://mergulhao.info/inscricao/trunk"

# Nao precisa ser  alterado daqui pra baixo!

set :use_sudo, false
set :deploy_to, "/home/#{user}/#{application}"
set :domain, "#{user}@#{application}"

role :app, domain
role :web, domain
role :db,  domain, :primary => true

namespace :deploy do
  desc "Restarts all FCGI processes."
  task :restart, :roles => :app do
    # NOTA: Segundo o reaper a opcao --dispatcher esta depreciada, verificar
    # outra solucao.
    run "#{current_path}/script/process/reaper --dispatcher=dispatch.fcgi"
  end
end
</code>
</pre>

9. Faça commit de tudo pro svn.

10. Rode o setup e verifique se não ocorre nenhum erro. Esse comando somente precisa ser executado no primeiro deploy. Ele é responsável por criar a estrutura de diretórios necessária no servidor.

    cap deploy:setup

11. Rode o deploy com as migrações:

    cap deploy:migrations

Para executar os próximos deploys basta executar:

    cap deploy

Se existirem migrações para realizar:

    cap deploy:migrations

Se eu não esqueci de colocar nenhum passo e deu tudo certo, sua aplicação estará no ar. É claro que estamos seguindo aqui algumas convenções, como estar utilizando svn para controle de versões. Espero que seja útil, estou aberto a receber o feedback sobre isso, deixe-me saber se você utilizou essa receita com sucesso(e com fracasso também!).

É isso!


