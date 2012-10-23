--- 
layout: post
title: 'Usando o plugin contacts para baixar os contatos de seus usuários'
categories: 
  []
tags:
  - rails
  - plugin
---


O plugin [contacts][1] foi desenvolvido pelo [Mislav Marohnić][2] e serve para você conseguir acesso a lista de contatos de seus usuários em serviços como Gmail, Yahoo!, Flickr e Windows Live. Calma calma! Não entrem em pânico! Para você ter acesso às informações é necessário que seu usuário autentique na página do serviço e autorize o seu site a acessar as informações.

## Como a coisa funciona?

Não é nada do outro mundo. Você coloca dentro da sua página um botão que levará o usuário para a página do serviço.

<div class="center">
<a href="/assets/images/2009/3/14/contacts1.png"><img src="/assets/images/2009/3/14/contacts1.png" alt="Contacts Image 1" width="480" height="202" /></a>
</div>

Ao clicar no botão você entra na página do serviço, nesse caso o Google, onde se tem a opção de conceder ou de negar o acesso.

<div class="center">
<a href="/assets/images/2009/3/14/contacts2.png"><img src="/assets/images/2009/3/14/contacts2.png" alt="Contacts Image 2" width="480" height="202" /></a>
</div>

Ao conceder o acesso, o Google envia o usuário novamente para o seu site, passando um token como parâmetro na URL. É com esse token que fazemos o acesso aos contatos do usuário.

<div class="center">
<a href="/assets/images/2009/3/14/contacts3.png"><img src="/assets/images/2009/3/14/contacts3.png" alt="Contacts Image 3" width="480" height="202" /></a>
</div>

## Mãos à obra

Primeiro vamos criar um projeto Rails novo:

    rails mycontactsproject

Instalar o plugin:

    script/plugin install git://github.com/mislav/contacts.git

E gerar um controlador para tratar dos contatos:

    script/generate controller contacts

Agora, vamos escrever uma view com o botão onde o usuário irá clicar no nosso site. Criei o arquivo _app/views/contacts/index.html.erb_ com o seguinte conteúdo:

    <%- form_tag Contacts::Google.authentication_url(url_for(:action => 'show', :only_path => false)) do -%>
      <%= submit_tag "Clique aqui" %>
    <%- end -%>

Esse código gera um formulário com um botão de submit que faz um post para uma URL do Google. Essa URL é gerada através do método _authentication\_url_. O parâmetro que foi passado é a URL de retorno que o Google irá chamar na hora de enviar o usuário de volta ao nosso site.

É bom lembrar que isso não tem como funcionar se você estiver utilizando a url _localhost_. Para testar localmente é preciso usar algum serviço desses de [DNS Dinâmico][3], dessa forma o Google pode chamar uma URL que direcionará para a sua estação local.

## Tratando o retorno do Google

Vamos definir o método show dentro do nosso _ContactsController_. É ele que tratará o token enviado pelo Google e fará a busca dos contatos de nosso usuário:

    class ContactsController < ApplicationController
      def show
        gmail = Contacts::Google.new(params[:token])
        @contacts = gmail.contacts
      end
    end

Nós passamos o token que veio na requisição para o construtor da classe _Contacts::Google_ e isso nos retorna o objeto usado para recuperar os contatos. Basta chamar o método _contacts_ nesse objeto e colocar o resultado, um Array de contatos, numa variável de instância que será utilizada em nossa view _app/views/contacts/show.html.erb_.

Na view, fazemos um loop para impressão dos contatos(na prática, você deve adaptar isso para a necessidade da sua aplicação):

    <ul>
      <%- for contact in @contacts -%>
        <li><%= contact.name %> -  <%= contact.email %></li>
      <%- end -%>
    </ul>

Basta agora subir o servidor e testar na URL: _http://seudominiodinamico.com:3000/contacts_. Se tudo deu certo, após clicar no botão _Clique aqui_ e autorizar no Google, será exibida a sua lista de contatos com nome e e-mail.

Lembre-se que para testar esse projeto localmente você deve usar algum serviço de [DNS Dinâmico][3], que crie um domínio válido na internet que aponte para a sua estação local. Sem isso o Google não terá como chamar uma URL que envie o navegador de volta para a sua aplicação.

Os arquivos completos desse projeto podem ser baixados direto do [meu repositório no GitHub][4].

[1]: http://github.com/mislav/contacts/tree/master
[2]: http://mislav.uniqpath.com/
[3]: http://www.dyndns.com/
[4]: http://github.com/mergulhao/mycontactsproject/tree/master


