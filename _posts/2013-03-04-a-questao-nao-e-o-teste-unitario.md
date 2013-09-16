--- 
layout: post
title: 'A questão não é o teste unitário'
author: Jonathan Rasmusson
tags:
  - divagando
  - tdd
  - ios
  - traducao
---

Esta é a tradução de um post muito legal do [Jonathan Rasmusson][jon]. Entrei em contato com ele, que imediatamente autorizou a publicação dessa tradução. Conheça o [post original][original].

[jon]: https://twitter.com/jrasmusson
[original]: http://agilewarrior.wordpress.com/2012/10/06/its-not-about-the-unit-tests/

* * *

> "Programadores iOS normalmente não fazem testes unitários. Então por que eles, como uma comunidade, parecem desfrutar de uma reputação de qualidade?"

## Sem testes unitários. Sem integração contínua. Sem desenvolvimento guiado por testes.

Isso resume bem meu último projeto. Foi meu primeiro projeto iOS para um cliente e nós não pudemos usar nossas práticas queridas, mas entregamos um produto com ótima qualidade.

Isso realmente me incomodou.

Eu sempre pensei que testes unitários eram essenciais. Mas essa experiência com iOS parece que desafia algumas suposições que eu fui construindo por todos os anos que passei escrevendo software e me fez questionar algumas desconfortáveis questões.

Estaria eu regredindo nas práticas de desenvolvimento?  
Será que testes unitários não são essenciais?  
Existia algo diferente no desenvolvimento para iOS?  
E como a comunidade iOS entrega produtos com tanta qualidade sem ter os testes unitários no coração?

Essas questões me fizeram passar noites em claro e me levaram a buscar a alma do que está contido nesse artigo.

## Desafiando as suposições

10 anos atrás eu debatia com as pessoas sobre as vantagens de se utilizar testes unitários. Não mais. Escrever testes unitários se tornou uma prática tão comum que hoje é difícil encontrar uma plataforma moderna que não tenha algum tipo de framework de testes automatizados.

E por que não? Os benefícios são óbvios. Pode-se lançar, mudar e refatorar o código com confiança. Também economiza-se muito com os testes de regressão. O sentimento de segurança que se tem por saber que existe uma suite de testes automatizados é incontestável.

Então imagine minha surpresa quando eu entrei na comunidade que é responsável por alguns dos aplicativos mais amados no mundo e descobri que não se fazem testes unitários. Ainda mais desconcertante: eles parecem estar fugindo disso!

## Qual é a diferença com o iOS?

Eu não vou dizer que o desenvolvimento de aplicativos em iOS é mais fácil, mas existem algumas coisas que os desenvolvedores de iOS têm a seu favor.

  1. Tamanho de tela menor.

  Não se pode colocar muita coisa numa tela de telefone. Simplesmente não tem espaço. Os aplicativos tendem a ser menores (muitos não chegam a ter um backend). Isso, combinado com a cultura do minimalismo, simplifica muito as coisas em termos de código e informação. Simplesmente existe menos de tudo.

  2. Não há legado.

  Aplicativos móveis são muito novos. Programadores iOS não estão inundados com 100.000 linhas de código legado, o que é comum em aplicativos corporativos. Isso os deixa livres para recomeçar do zero.

  3. Uma linguagem única.

  Pode-se criar um aplicativo iOS conhecendo apenas uma linguagem: Objective C. Um típico programador web precisa saber pelo menos quatro ou cinco linguagens para fazer um simples HTML estático.

  4. Plataforma madura.

  Uma grande parte do trabalho pesado é feito para você pelo iOS. Se você precisa de algo com fotos, música ou integração com o Facebook, já está feito. Somente pluga-se.

  5. Muito visual.

  Essa foi provavelmente a maior diferença para mim, que vim do mundo corporativo. No lugar de perder dias nadando por camadas de arquitetura (fazendo mocks e testando unitariamente cada passo do caminho), o programador iOS praticamente não tem camadas. Eles ocupam seu tempo quase todo na camada de interface com usuário.

  Isso significa que a natureza do código escrito, com frequência, é apenas visual. A única forma de ver se funcionou é abrir o simulador e testar.

Por mais interessante que sejam essas diferenças, no entanto, ainda falta uma parte da história. Se fosse só isso, toda plataforma móvel iria desfrurar desse nível superior de qualidade. Isso não acontece. Há algo mais acontecendo. Algo maior.

## Quem se importa?

Quando você faz algo por muito tempo, é fácil esquecer o que outras pessoas já fizeram na sua área sem os mesmos recursos.

* Arquitetos utilizavam réguas de cálculo para trabalhar.
* Navegadores utilizavam as estrelas para navegar.
* Artistas trabalhavam somente com suas mãos.
* Programadores não utilizavam testes unitários (muitas vezes entregando produtos com mais qualidade do que se vê hoje em dia).

E mesmo assim em todas essas áreas, os profissionais foram capazes de realizar o que hoje, com ferramentas modernas, podemos admitir como um trabalho de alta qualidade. Quais eram seus segredos?

## Eles se importavam

Essas pessoas simplesmente se preocupavam mais com seu trabalho, e com a forma como o faziam, do que seus contemporâneos. E é isso que eu vejo na comunidade iOS.

Eles se preocupam mais com a arte.  
Eles se preocupam mais com o texto exato e o espaçamento do texto nos butões.  
Eles se preccupam mais com velocidade e performance.  
E eles se preocupam muito com os mínimos detalhes (como por exemplo relembrar onde uma lista estava posicionada quando um usuário colocou a aplicação em background).

A Apple trabalha pesado para ter certeza de que cada programador em seu ecossistema se importe e ela os entrega ferramentas para que não tenham desculpa para não se importar.

Eles documentam cuidadosamente como criar uma arte linda para os aplicativos.  
Eles compartilham (e fazem cumprir) guias de interface de usuário para o desenvolvimento de aplicativos móveis.  
Eles fazem a curadoria e bloqueiam aplicativos que não atendam determinados padrões de qualidade.  
E seu antigo CEO era conhecido por ligar para as pessoas no meio da noite pedindo trocar a cor de um logo.

Está no DNA da comunidade. Aqui está a carta que se recebe no primeiro dia de trabalho na Apple.

<img src="/assets/images/2013/apple-first-day-of-work.png" />

* * *

Existe o trabalho e existe o trabalho da sua vida.

O tipo de trabalho que tem a sua impressão digital por todo lado. O tipo de trabalho no qual você não aceita falhar. Que você sacrificaria um fim de semana por ele. Você pode fazer esse tipo de trabalho na Apple. As pessoas não entram aqui para jogar um jogo ganho. Elas vem aqui para nadar até o fundo do poço.

Elas querem que seu trabalho adicione algo mais.

Algo grande. Algo que não pode acontecer em nenhum outro lugar.

Bem-vindo à Apple.

* * *

Esses caras se preocupam. Eles se preocupam como artistas. E o mesmo não pode ser dito sobre outras plataformas e comunidades das quais já fiz parte.

## E o que disso tem relação com testes unitários?

Absolutamente nada. É aí que está a minha questão.

O que traz qualidade é algo muito maior que uma coleção de técnicas de engenharia de software ou um punhado de práticas.

Quando eu entrei nessa comunidade eu estava com a falsa premissa de que se alguém não escrevesse código como eu escrevo, essa pessoa deveria estar fazendo errado.

Em vez disso, eu descobri uma comunidade que se importa mais com qualidade do que eu, e que eu ainda tenho muito a aprender sobre como criar uma experiência de qualidade.

Isso é o que todas essas coisas me ensinaram. A questão não são as práticas. A questão é o espírito, a intenção, e a situação em que são aplicadas. Usar determinadas práticas quando necessário. Rapidamente abandonar quando não necessário.

Os testes são ferramentas de valor inestimável para escrever um bom software? Claro!  
Vou criar um software ruim se eu não puder realizar testes unitários? Não!

E foi isso que esta experiência me ensinou. Eu preciso ser mais que um apunhado de práticas. Eu continuarei fazendo testes unitários onde eu puder (incluindo iOS) e onde não puder farei o que for preciso para ter qualidade.

Tudo que tenho a dizer é que para continuar crescendo precisamos colocar em cheque as nossas maiores suposições. Isso nem sempre faz você se sentir bem, mas é dessa maneira que crescemos, ganhamos experiência e transformamos conhecimento em sabedoria.

Se você pensa que já resolveu tudo e que todas as soluções encontradas são as melhores, então você parou de viver.

Se você quer ver o quão profundo toda essa discussão por qualidade pode ir, eu sugiro o livro "Zen and the Art of Motorcycle Maintenance". Não é um livro fácil de ler. Mas pode mudar a sua vida.

E não se esqueça, continue escrevendo testes unitários.
