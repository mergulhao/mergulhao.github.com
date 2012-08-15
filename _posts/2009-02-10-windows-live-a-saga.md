--- 
layout: post
title: 'Windows live, a saga!'
disqus_id: /2009/2/10/windows-live-a-saga
categories: 
  []
tags:
  - divagando
---


Estamos implementando uma funcionalidade para que nossos usuários possam buscar seus contatos nas bases dos serviços de mensagem como gtalk e msn e convida-los para que se cadastrarem no [Redeparede][rp]. Estamos utilizando o plugin [contacts][pi] do [Mislav][], funciona muito bem, recomendo.

A parte do gtalk foi bem simples. O google não faz nenhuma exigência mirabolante e basta o usuário te autorizar que você consegue acesso aos contatos dele. No caso do MSN, a Microsoft exige que você cadastre a sua aplicação no Windows Live. No [Redeparede][rp] nós temos domínios em diversos países da América Latina. Cada domínio deve ser cadastrado no Windows Live como uma aplicação diferente.

Para piorar as coisas algum [espírito de porco][fdp] já registrou o domínio redeparede.com.br dentro do Windows Live(não, a Microsoft não tem nenhum modo de confirmação de que aquele domínio é seu, assim como o Google faz com diversos serviços dele) e quando eu tento cadastrar lá eles me retornam uma mensagem dizendo que o domínio já está cadastrado no Windows Live.

Abaixo segue a saga na tentativa, ainda sem solução, de resolver o problema com o suporte da Microsoft. Alguém tem contatos lá dentro? Please...

## Email 1 enviado pelo formulário de contato - 03/02/2009

> From : Sylvestre Mergulhão  
> Sent : Tuesday, February 03, 2009 8:11:04 PM UTC  
> To : LV_ID.WNLV.WW.00.PT.MSF.SEA.TS.T01.RTG.00.EM    
> Subject : Windows Live ID:Eu tenho um problema ou u:Outros
> 
> Serviço:  \[Service:\]  
>    Windows Live ID
> 
> Tipo de problema:  \[What type of problem do you have?\]  
> Eu tenho um problema ou uma pergunta diferente \[Eu tenho um problema ou uma pergunta diferente\]
> 
> Outros \[Outros\]  
> 
> Nome completo: \[Full name:\]  
>    Sylvestre Mergulhão
> 
> Para que endereço de e-mail você deseja que a resposta seja enviada? \[The e-mail address for us to send a response:\]  
>    mergulhao83@\*\*\*.com
> 
> Endereço de email/identificação do membro principal associado à conta que você está consultando: \[Primary e-mail address/member ID associated with the account you are inquiring about:\]  
>    jgagne33@\*\*\*.com

> Para assegurar uma resolução rápida do problema, forneça o maior número possível de detalhes, incluindo a data e hora a que ocorreu o problema, uma descrição do que estava a tentar fazer no momento, os passos detalhados que executou até ao momento da ocorrência do problema e informações detalhadas sobre quaisquer mensagens de erro que tenham sido apresentadas. \[Be specific when describing your problem. The details that you include enable us to promptly send you the most likely solution to your issue.\]  
> 
>    Olá,
> 
> Eu tenho um Windows Livre Id com o email jgagne33@\*\*\*.com e eu trabalho para o site redeparede.com. Nós estamos registrando nosso domínios para usar o Live Services, então eu estou criando os projetos no Azure Services Developer Portal. Tenho algumas perguntas:
> 
> - Nós temos muitos domínios diferentes, mas que são a mesma aplicação no backend. Eu tenho mesmo que registrar cada um de nossos domínios como projetos? A única diferença entre eles é a url de retorno, onde a única mudança é o domínio.
> 
> - Quando tento resgistrar o nosso domínio redeparede.com.br como um projeto estou recebendo a mensagem: The domain name is already in use by another developer or project. Isso pode ter sido registrado por algum antigo desenvolvedor nosso ou então alguém de má intenção. Como podemos resolver isso?
> 
> - Hoje temos um total de 25 domínios, mas o portal parece que limita isso a um número inferior a esse. Como posso adicionar mais projetos?
> 
> Obrigado.

## Resposta do Email 1 - 05/02/2009

> from	Microsoft Customer Support <IDENT.CUSD.00.00.PT.TPU.BUA.TS.T01.SPT.00.EM@css.one.microsoft.com>  
> to	Sylvestre Mergulhão  
> date	Thu, Feb 5, 2009 at 12:20 PM  
> subject	RE: SRX1092597961ID - Windows Live ID:Eu tenho um problema ou u:Outros
>
> Prezado Sylvestre,
>  
> Muito obrigada por contactar o Suporte Técnico do Windows Live Admin Center. Meu nome é Maraisa e e serei a encarregada de brindar-lhe toda ajuda possível.




> 
> Entendo que ao tentar registrar o domínio redeparede.com.br, você recebe uma mensagem de que o mesmo já está sendo utilizado por outro usuário. Compreendo o desagrado que possa sentir.
> 
> Sylvestre, esta questão deve ser tratada com o seu provedor de domínio, onde você adquiriu o nome de domínio redeparede.com.br. Por favor para obter ajuda contundente a respeito entre em contato com o seu provedor.
> 
> Para criar um domínio do Windows Live Admin Center, siga estas etapas:
> 
> 1. Visite o seguinte site: http://admincenter.live.com
> 
> 2. Clique em "Introdução".
> 
> 3. Digite o nome do domínio. Deixe a opção "Configurar Windows Live Hotmail para meu domínio" como a opção padrão se quiser que o Windows Live Hotmail gerencie suas mensagens de email. Se quiser configurar isso posteriormente, clique em "Nenhum email para meu Domínio" e clique em "Continuar".
> 
> 4. Na página "Atribuir um administrador de domínio", você tem a opção de entrar usando um Windows Live ID existente. Além disso, é possível torná-la a conta do administrador do domínio. Como alternativa, você pode criar um novo Windows Live ID que terá o mesmo nome do domínio que você está configurando.
> 
>   . Se você optar por usar um ID existente do Windows Live, acesse a tela de entrada. Para fazer isso, clique em "Entrar com um ID do Windows Live existente" e clique em "Continuar".
>  
>   . Se quiser criar um novo ID do Windows Live, clique em "Criar um novo ID do Windows Live no seu domínio" e clique em "Continuar". Digite o endereço de email a ser usado como administrador de domínio e siga as instruções exibidas na tela para criar a nova conta.
>  
> 5. Na página "Revise as configurações e aceite o Contrato", verifique se o nome do domínio, o serviço de email e os detalhes do administrador estão corretos. Revise o código de conduta de "Domínios Personalizados" e o "Adendo de Domínios Personalizados" antes de clicar em "Aceito".
> 
> Você verá a página de configurações do domínio. Essa página o notifica com a seguinte mensagem: "your service is pending DNS configuration. Please make the required DNS changes". (A configuração DNS está pendente para o serviço. Faça as alterações necessárias no DNS.) As informações fornecidas nessa página devem ser usadas para realizar a seguintes ações:
> 
> 1. Copiar os dados do Servidor MX fornecidos nessa página pelo Windows Live Admin Center. Substituir as informações de registros MX atuais/padrão que o seu registrador de domínios possui em registro.
> 
> 2. Opcional: adicione um ID do Remetente usando os valores fornecidos. Um ID de remetente é um registro de texto (TXT) referente ao seu domínio.
> 
> 3. Depois de fazer as alterações, retorne à página de configurações do Windows Live Admin Center. Clique no botão "Atualizar" para confirmar que os registros DNS estão corretamente configurados.
> 
> Mais uma vez lhe agradeço por entrar em contato com o Suporte Técnico do Windows Live Admin Center. Se precisar de suporte adicional, não hesite em nos contactar novamente! Estamos disponíveis 24 horas por dia, 7 dias por semana.
> Atenciosamente,
> 
> Maraisa M.
> Suporte Técnico do Windows Live Admin Center.

## Email 2 - 05/02/2009

> From : "Sylvestre Mergulhão"  
> Sent : Thursday, February 05, 2009 3:56:36 PM UTC  
> To : "Microsoft Customer Support"  
> Subject : Re: SRX1092597961ID - Windows Live ID:Eu tenho um problema ou u:Outros  
> 
> Eu NÃO estou tentando registrar o domínio redeparede.com.br, pois estedomínio já é MEU! Eu estou tentando criar o projeto dentro desse site de vocês (http://go.microsoft.com/fwlink/?LinkID=130560) para que eu possa utilizar os webservices do live services! Um serviço de vocês.
> 
> Agradeço se puder responder esta e as outras questões que estão coladas na minha mensagem abaixo ou encaminhar para o setor responsável.
> 
> ATENÇÃO: EU TAMBÉM NÃO ESTOU QUERENDO QUE O LIVE SERVICES SEJA O GERENTE DE E-MAILS DE MEUS DOMÍNIOS. SOMENTE QUERO REGISTRAR MINHA APLICAÇÃO PARA UTILIZAR O SERVIÇO DE WEBSERVICES DO LIVE SERVICES, LOGO NÃO TEM NADA QUE ALTERAR MX EM DNS.
> 
> Agradeço a atenção.

## Resposta do Email 2 - 06/02/2009

> from	Microsoft Customer Support <IDENT.CUSD.00.00.PT.TPU.BUA.TS.T01.SPT.00.EM@css.one.microsoft.com>  
> to	Sylvestre Mergulhão  
> date	Fri, Feb 6, 2009 at 1:43 PM  
> subject	RE: SRX1092597961ID - Windows Live ID:Eu tenho um problema ou u:Outros
> 
> Prezado Sylvestre,
>  
> Muito obrigada por contactar o Suporte Técnico do Windows Live Admin Center. Meu nome é Maraisa e e serei a encarregada de brindar-lhe toda ajuda possível.
> 
> Sylvestre, entendo por sua mensagem, que você está enfrentando dificuldades de registrar o seu domínio redeparede.com.br em nosso site do Windows Live Admin Center, para que possamos melhor ajudá-lo  necessário que você capturasse a tela com o erro para que possamos resolver seu inconveniente rapidamente.
> 
> Para capturar a tela do erro, execute essas etapas:
> 
> 1. Abra a página que você está tendo problemas e, em seguida, pressione o botão PrintScreen (PrintScrn) no teclado. 
> 2. Abra Microsoft Paint. Para fazer isso, clique em "Iniciar", clique em "Todos os Programas" e, em seguida, clique em "Acessórios". 
> 3. Clique em "Paint". 
> 4. Clique em "Editar" e, em seguida, clique em "Colar". A captura de tela é colada no Paint. 
> 5. Clique em "Arquivo" e clique em "Salvar como". 
> 6. Em "Salvar como tipo", selecione "JPEG". 
> 7. Nomeie o arquivo e, em seguida, salve o arquivo na área de trabalho. 
> 8. Envie a captura de tela para nós.
> 
> Essa imagem nos ajudará a investigar e solucionar seu inconveniente. Espero que saiba desculpar-nos.
> 
> Mais uma vez lhe agradeço por entrar em contato com o Suporte Técnico do Windows Live Admin Center. Se precisar de suporte adicional, não hesite em nos contactar novamente! Estamos disponíveis 24 horas por dia, 7 dias por semana.
> 
> Atenciosamente,
> Maraisa M.
> Suporte Técnico do Windows Live Admin Center.

## Email 3 - 06/02/2009

> from	Sylvestre Mergulhão  
> to	Microsoft Customer Support <IDENT.CUSD.00.00.PT.TPU.BUA.TS.T01.SPT.00.EM@css.one.microsoft.com>  
> date	Fri, Feb 6, 2009 at 5:20 PM  
> subject	Re: SRX1092597961ID - Windows Live ID:Eu tenho um problema ou u:Outros
> 	
> Segue em anexo.

<a href="http://mergulhao.info/assets/2009/2/10/Captura_de_tela-0.png">
<img src="http://mergulhao.info/assets/2009/2/10/Captura_de_tela-0.png" width="473" height="361" alt="ms image0"/>
</a>

<a href="http://mergulhao.info/assets/2009/2/10/Captura_de_tela-1.png">
<img src="http://mergulhao.info/assets/2009/2/10/Captura_de_tela-1.png" width="473" height="361" alt="ms image1"/>
</a>

<a href="http://mergulhao.info/assets/2009/2/10/Captura_de_tela-2.png">
<img src="http://mergulhao.info/assets/2009/2/10/Captura_de_tela-2.png" width="473" height="361" alt="ms image2"/>
</a>

<a href="http://mergulhao.info/assets/2009/2/10/Captura_de_tela-3.png">
<img src="http://mergulhao.info/assets/2009/2/10/Captura_de_tela-3.png" width="473" height="361" alt="ms image3"/>
</a>

## Resposta do Email 3 - 07/02/2009

> from	Microsoft Customer Support <IDENT.CUSD.00.00.PT.TPU.BUA.TS.T01.SPT.00.EM@css.one.microsoft.com>  
> to	Sylvestre Mergulhão  
> date	Sat, Feb 7, 2009 at 1:19 PM  
> subject	RE: SRX1092597961ID - Windows Live ID:Eu tenho um problema ou u:Outros
> 
> Prezado Sylvestre,
>  
> Muito obrigada por contactar o Suporte Técnico do Windows Live Admin Center. Meu nome é Maraisa e e serei a encarregada de brindar-lhe toda ajuda possível.
> 
> Sylvestre, estivemos checando as imagens que nos enviou, o seu problema está relacionado ao seu provedor de dominio. O que possui a página que nos enviou em anexo. Por favor envie uma solicitação de suporte ao seu provedor para obter a ajuda que necessita.
> 
> Para mais informações sobre os produtos do Windows Live acesse: http://get.live.com/.
> 
> Mais uma vez lhe agradeço por entrar em contato com o Suporte Técnico do Windows Live Admin Center. Se precisar de suporte adicional, não hesite em nos contactar novamente! Estamos disponíveis 24 horas por dia, 7 dias por semana.
> 
> Atenciosamente,
> 
> Maraisa M.
> Suporte Técnico do Windows Live Admin Center

## Email 4 - 09/02/2009

> from	Sylvestre Mergulhão  
> to	Microsoft Customer Support <IDENT.CUSD.00.00.PT.TPU.BUA.TS.T01.SPT.00.EM@css.one.microsoft.com>  
> date	Mon, Feb 9, 2009 at 2:35 PM  
> subject	Re: SRX1092597961ID - Windows Live ID:Eu tenho um problema ou u:Outros
> 	
> Permita-me discordar de você Maraisa. Olhe nos detalhes de um trecho
> da imagem que eu enviei a você no anexo. Eu estou tentando usar o
> Azure Services Developer Portal... olha o domínio(a url)... ele é um
> microsoft.com! Estou tentando usar um serviço de vocês isso não tem
> relação alguma com meu provedor de dominio.
> 
> Por favor, me encaminhe para o setor responsável pelo portal Azure
> Services Developer Portal que é um portal da Microsoft para
> desenvolvedores e NÃO tem relação alguma com meu provedor de dominio.
> 
> Obrigado.

<a href="http://mergulhao.info/assets/2009/2/10/imagem.png">
<img src="http://mergulhao.info/assets/2009/2/10/imagem.png" width="473" height="226" alt="ms image4"/>
</a>

## Resposta do Email 4 - 10/02/2009

> from	Microsoft Customer Support <IDENT.CUSD.00.00.PT.TPU.BUA.TS.T01.SPT.00.EM@css.one.microsoft.com>  
> to	Sylvestre Mergulhão  
> date	Tue, Feb 10, 2009 at 2:39 PM  
> subject	RE: SRX1092597961ID - Windows Live ID:Eu tenho um problema ou u:Outros
> 
> Prezado Sylvestre,
> 
> Muito obrigado por contatar o Suporte Técnico do Windows Live Admin Center. Meu nome é Diana e terei o prazer de lhe ajudar.
> 
> Recebemos sua consulta, porém para determinar qual seu problema, necessitamos que envie mais informações para poder diagnosticá-lo e assim resolve-lo com eficiência.
> 
> Por favor, responda a esta mensagem incluindo as seguintes informações:
> 
> * Informações mais detalhadas sobre o problema que você está experimentando.
> * A data de inicio do mesmo.
> * Quais mensagens de erro que recebe?
> * Que passos seqüenciais exatos efetuou para produzir este problema?
> * Tem mudado algo no equipamento em questão, antes de surgirem os problemas?
> * Pode reproduzir este problema em outros computadores, ou com outra conta, neste mesmo equipamento?
> * Dispõe de algum tipo de filtro de internet, bloqueador de janelas emergentes ou outros programas instalados que podem evitar que funcione?
> * Conta de email onde deseja receber a resposta.
> 
> Uma vez que tenhamos recebido estas informações, nossa equipe estudará novamente seu caso.
> 
> Queremos agradecer-lhe outra vez por ter contatado o Suporte Técnico do Windows Live Admin Center. Por favor, qualquer dúvida, consulta ou sugestões, fique à vontade de contatar-nos de novo. Estamos as 24 horas os 7 dias da semana para lhe ajudar.
> 
> Atenciosamente,
> 
> Diana P.
> 
> Suporte Técnico do Windows Live Admin Center.

Depois dessa última resposta estou me perguntando se vale a pena continuar tentando algo pelo suporte. E é incrível como ainda hoje existem gerentes de TI que só compram Microsoft pois ela dá suporte. Eu mereço!

[fdp]: http://desciclo.pedia.ws/wiki/Filho_da_puta
[pi]: http://github.com/mislav/contacts/tree/master
[Mislav]: http://github.com/mislav
[rp]: http://redeparede.com.br


