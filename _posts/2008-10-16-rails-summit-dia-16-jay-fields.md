--- 
layout: post
title: 'Rails Summit dia 16: Jay Fields'
disqus_id: /2008/10/16/rails-summit-dia-16-jay-fields
categories: 
  []
tags:
  - rails
  - eventos
  - railssummit
---


Existem 6 tipos de conceitos de testes: unit, external, smoke, functional, integration e acceptance. Nunca se deve ter medo de falhar quando se estar testando. Quando se trabalha com testes encontramos erros que passariam despercebidos. Os testes devem ser bem escritos e não serem esquecidos. Um erro comum é testar tudo. Em vez de testar tudo, teste as coisas mais importantes. Testes de aceitação no cliente também são muito complexos. Testes com interdependencia são bem problemáticos. Testes com problema de velocidade são críticos. Eles tem que ser rodados muitas vezes.

100% de cobertura de testes não é a meta. Em ruby podemos optar por toda essa cobertura. Não é necessário escrever testes para cobrir 100%. Os testes são a parte mais importortante do sistema. Se o seu negócio depende de uma funcionalidade que é crítica, ela deve ser muito bem testada. Para ter a confiança ao fazer refactoring é precisa ter alguma cobertura de testes, eles dão confiança. Seu código de testes deve ser limpo, perfeito.

As imaturidades do teste do selenium. Ele é bom, mas falha em algumas situações. Existem diversas maneiras diferentes de utilizar o selenium. É preciso escolher a maneira correta no seu contexto. Se você está programando em ruby, utilize selenium programando em ruby. O selenium tem outro problema grande: ele é muuuuuito lento. Grandes suites de teste do selenium são difíceis de manter. O selenium tem bugs, e roda em cima do navegador e algum bug no internet explorer pode fazer o seu teste quebrar e você irá demorar muito tempo para descobrir onde o problema está. O selenium não informa precisamente onde estão os problemas. 

Selenium tem boas vantagens. Ele pode testar o seu site entre navegadores. Ele é o único a testar o fullstack de uma aplicação web. Ele é fácil de usar e por ter muitas maneiras de usar, ele pode se adaptar a praticamente qualquer ambiente. Ele é amigável para testadores. É a melhor solução para smoke testing.

Imaturidade do test/unit. Ele não é tester friendly. Os testes são procedimentos e se perde muito da orientação a objetos, não há herança entre testes. Ele testa apenas pequenas coisas. A sintaxe dele é horrível, não intuitiva, não há um mapeamento muito bom entre o código do software e o de teste. Não há um framework de mock incluído. Mas tem vantagens, ele é muito amigável com o desenvolvedor. Muitos desenvolvedores já utilizaram algum tipo de teste unitário. Apesar da sintaxe feia, os desenvolvedores estão acostumadas a ela. E é fácil de escrever para um desenvolvedor. Roda muito rapidamente.

Imaturidade de rspec. Rspec usa muita mágica para fazer as coisas funcionar. Ele é muito baseado no inglês, mas ao mesmo tempo não tão consistente assim com o inglês. Mas depois da familiarização com o rspec entender as convenções fica fácil. Não é tão simples de extender. Ele é focado em testes de comportamento (behavior), que são mais fáceis de entender. Ele gera documentação automática e possui um framework de mock embutido.

Imaturidade do Synthesis. É um framework de integração. Encoraja classes desacopladas. Dá confiança sem necessidade de fazer testes de integração traducionais. 

Imaturidade do Expectations. Framework de expectativas, similar com frameworks de behavior. Ele é somente código, não existem métodos. Então por exemplo se um teste falha ele apenas diz que falhou uma coisa na linha 35, por exemplo. Então ele não tem documentação, pois há ligação entre uma linha de teste e sobre qual teste em si está sendo executado. Ele é bem conciso, então essa é a parte legal, por isso que eu uso ele para certas situações. Ele encoraja a realização de testes bem granulares. Os valores esperados são literais. Encoraja que você faça definição de métodos que sejam expressivos.

Experimente e faça o que funciona melhor para você.

