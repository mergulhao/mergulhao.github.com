--- 
layout: post
title: 'Um pouco de migrações - Rails migrations'
categories: 
  []
tags:
  - rails
---


Para acompanhar a evolução da sua base de dados, no Rails, existem as migrações. Migrações nada mais são do que scripts escritos em linguagem Ruby e que utilizam API disponibilizada pelo Rails para criação, alteração de tabelas do banco de dados. Tal qual as outras operações do ActiveRecord, as migrações também são códigos independentes do SGBD que está utilizando. Com isso ela permite facilmente a migração da aplicação para outro SGBD. São fortes aliadas no desenvolvimento incremental.

Ao criar um modelo usando o _generate_, temos:

      $ script/generate model client
      exists  app/models/
      exists  test/unit/
      exists  test/fixtures/
      create  app/models/client.rb
      create  test/unit/client_test.rb
      create  test/fixtures/clients.yml
      create  db/migrate
      create  db/migrate/001_create_clients.rb

Reparem no arquivo _db/migrate/001\_create\_clients.rb_ que foi criado. Editando ele, temos:

      class CreateClients < ActiveRecord::Migration
        def self.up
          create_table :clients do |t|
          end
        end

        def self.down
          drop_table :clients
        end
      end

Vamos supor que gostaríamos de ter para o nosso client os atributos, _name_, _birth_ e _email_. Então alteramos o arquivo para:

      class CreateClients < ActiveRecord::Migration
        def self.up
          create_table :clients do |t|
            t.column :name, :string
            t.column :birth, :date
            t.column :email, :string
          end
        end

        def self.down
          drop_table :clients
        end
      end

Agora para rodar a migração(a base de dados já deve existir e estar configurada no database.yml):

      rake db:migrate

Verificando em nosso banco de dados temos a tabela criada com os campos que desejamos e também a tabela _schema\_info_, que serve para o controle da versão em que o banco se encontra.

Se em determinado ponto do projeto fosse necessário adicionar um novo atributo para nosso client, então procederíamos assim:

      script/generate migration add_sex_to_client

Agora editando o arquivo _db/migrate/002\_add\_sex\_to\_client.rb_ que foi criado, deixamos assim:

      class AddSexToClient < ActiveRecord::Migration
        def self.up
          add_column :clients, :sex, :string
        end

        def self.down
          remove_column :clients, :sex
        end
      end

E para rodar a migração:

      rake db:migrate

É importante manter sempre consiso o método _self\_down_, para que seja possível retornar à base para versões anteriores, mas é claro que existem situações onde não há como reverter a migração. Para atualizar o banco com uma migração específica:

      rake db:migrate VERSION=1

Nas migrações também podem ser adicionados dados no banco utilizando os próprios modelos(_models_) da sua aplicação Rails. Mas é preciso ficar atento quando à utilização indiscriminada desse recurso, pois eventualmente se esse modelo deixa de existir ou se os métodos utilizados são modificados, a sua migração pode ficar quebrada e incapaz de subir um banco do zero até a última revisão.

Alguns links com mais informações:

[Api Rails][api]   
[Crossing borders: Rails migrations][ibm]

[api]: http://api.rubyonrails.org/classes/ActiveRecord/Migration.html
[ibm]: http://www.ibm.com/developerworks/java/library/j-cb08156.html


