--- 
layout: post
title: 'Analizando cobertura dos testes com Rcov'
categories: 
  []
tags:
  - rails
  - tdd
  - ferramentas
---


Até o momento considero um sucesso a minha adesão ao TDD no desenvolvimento com Rails. Em apenas dois dias os testes automatizados encontraram bugs que possivelmente passariam desapercebidos e já escrevi novos testes para cobrir situações inicialmente não previstas, mas que mostraram sua cara nos testes que já estavam escritos.

Após algumas horas de testes e programação finalizei a primeira etapa de codificação do que será o novo sistema de inscrições do [Fórum de Software Livre do Rio de Janeiro][forumsl] desse ano, que ocorrerá em outubro. Foi todo um período de codificação em que não encostei em html/css, mas apenas na codificação dos testes e na lógica dos controladores e modelos.

Para validar todo o trabalho é necessário verificar a cobertura dos testes. Assim podemos descobrir se alguma linha de código passou sem ser testada. Pegando emprestada a idéia do pessoal da [ImproveIt][improveit], instalei o rcov no Ubuntu:

    sudo apt-get install rcov

Foi acrescentado um rake task para automatizar o processo de geração do relatório. Gerado  o arquivo _/lib/tasks/rcov.rake_ com o conteúdo(levemente modificado do original da ImproveIt):

<pre><code>
require 'rake/clean'  

RCOV_OUT = "doc/coverage"  

EXCLUDE = "-x /site_ruby/"  

CLOBBER.include(RCOV_OUT)  

RCOV = "rcov --no-color"  

task :coverage_units do  
     sh "find test/unit -name '*.rb' | xargs #{RCOV} #{EXCLUDE} --rails --output #{RCOV_OUT}/units"  
end  

task :coverage_functional do  
    sh "find test/functional -name '*.rb' | xargs #{RCOV} #{EXCLUDE} --rails --output #{RCOV_OUT}/functionals"
end  

task :coverage_all do  
    sh "find test/* -name '*.rb' | xargs #{RCOV} #{EXCLUDE} --rails --output #{RCOV_OUT}"
end  

task :rcov => [:coverage_all]  
</code></pre>

Agora basta entrar no diretório do seu projeto em Rails e digitar:

    rake rcov

Será gerado dentro do diretório _/doc/coverage_ o relatório de cobertura dos testes. E não é eu fui bem pra minha surpresa? Resultado: 100% testado! Que venham os próximos testes!

<p style="text-align: center;">
<a href="http://www.mergulhao.info/assets/images/2007/8/1/cobertura_rcov.png">
<img src="http://www.mergulhao.info/assets/images/2007/8/1/cobertura_rcov.png" alt="Resultado cobertura rcov" width="500" height="348" />
</a>
</p>

[cobertura_rcov]: http://www.mergulhao.info/assets/images/2007/8/1/cobertura_rcov.png
[forumsl]: http://www.forumsoftwarelivre.org.br
[improveit]: http://www.improveit.com.br/xp/praticas/tdd/rcov

