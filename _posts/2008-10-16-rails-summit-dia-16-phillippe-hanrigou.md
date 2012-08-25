--- 
layout: post
title: 'Rails Summit dia 16: Phillippe Hanrigou'
categories: 
  []
tags:
  - rails
  - eventos
  - railssummit
---


Existem diversos problemas com os testes do selenium. São naturalmente lentos, assim como qualquer tipo de teste de integração. Eles rodam no navegador, que são coisas instáveis, bugados. E ainda colocam pessoas poucos experientes para escrever os testes do selenium, o que é um problema. Tem que ser os melhores para fazer essa tarefa! Mas se é tão dificil, por que fazer?

E quanto mais javascript se usa, mais devem haver testes. Se você usa muito javascript a sua chance de ter algo que não funciona em todos os browsers é alta. E se você não suporta todas as plataformas, você estará perdendo dinheiro caso não suporte todas. Sobretudo na comunidade Rails. Então é por isso que temos que automatizar esse tipo de testes. E essas são coisas que tem que ser repetidas diversas vezes... então não são coisas que os humanos tem que fazer. A coisa mais fundamental sobre esses testes e a comunidade de Rails está usando esse tipo de ferramente, mas tem muitas coisas que podemos apredender dos mais antigos. Coisa que podemos aprender de antigos programadores XP, é que testes de aceitação são muito importantes. Pois os testes de aceitação dão poder ao cliente. Você precisa da aceitação para fazer o código correto, do ponto de vista do cliente. Os unit testes server para garantir que os pequenos pedaços funcionam, mas os testes de aceitação server para garantir que tudo funciona junto. O teste de aceitação é tão importante no desenvolvimento que ela não é considerada completa até que ela passe numa suite de aceitação. Uma suite de aceitação te gera confiança.

Depois da era de ouro, vieram os bárbaros! Os bárbaros são os browser, que impediram a realização de muitos testes de aceitação. Por sorte hoje temos o selenium.

Quando um teste falha, temos que investigar para descobrir onde está o problema. Então você tem que rodar isso na sua máquina e com sorte o problema também ocorrerá na sua máquina. A melhor forma de resolver o problema com mais facilidade é capturar a maior quantidade de informações no campos de testes: na máquina que rodou o teste, no browser e etc.

Agora a parte boa para diminuir o tempo de testes do selenium é que desenvolvemos o selenium-grid, que permite que diversos testes do selenium sejam paralelizados, inclusive entra diferentes máquinas de diferentes poderes de processamento. Um dos problemas, assim quando você coloca muitos fios de energia muitos juntos, é que você tem que garantir que um teste não irá interferir nos outros. Garantir por exemplo que as coisas irão rodar em stacks de Rails diferentes.

Uma coisa boa a fazer é deixar de fazer login como um teste no selenium, mas inserir diretamente um cookie no navegador e resetar a base de dados diretamente pelo teste do selenium. Isso é muito mais rápido.

A questão das fixtures. Testar com dados randomicos é complicado, pois há muitos efeitos colaterais. Testar usando fixtures fixas com grandes aplicações pode tornar a manutenção das fixtures muito dificil. Uma das soluções que podemos usar é criar os dados usados nos testes diretamente nos próprios testes, sem o uso de fixtures. Mas isso também é complicado, pois pode dar trabalho preencher objetos complexos. Uma solução plausível são os **Object Mother**. São como templates de objetos instanciados padrões, onde você passa parametros apenas para sobrescrever os valores do objeto que você quer que sejam diferentes do default. Existem diversas maneiras de fazer isso e há muita documentação na internet sobre o assunto.

Eu queria que vocês saissem daqui sem esquecer: não virem as costas para os testes de aceitação.

