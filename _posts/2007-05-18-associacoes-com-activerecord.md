--- 
layout: post
title: 'Associações com ActiveRecord'
categories: 
  []
tags:
  - rails
---


Vou contar um pouco da minha experiência com o ActiveRecord do Rails. Trata-se do *has and belongs to many* - hbtm - e do *has many through*, inserido no Rails 1.1.

As associações hbtm são resultado de relações muitos para muitos - ou n para n - entre duas tabelas do banco de dados. Por exemplo, imagine um livro. Esse livro pode ser enquadrado em diversas categorias simultaneamente. Reciprocamente, uma categoria pode possuir diversos livros enquadrados. Nesse caso teríamos duas classes de modelo:

    class Book < ActiveRecord::Base  
      has_and_belongs_to_many :categories  
    end  

e

    class Category < ActiveRecord::Base  
      has_and_belongs_to_many :books  
    end  

E temos o modelo de dados:

p{text-align: center}. <img src="http://mergulhao.info/assets/2007/5/18/activerecord1.png" style="border: 0px;" alt="activerecord1.png" />

A tabela *books_categories* não precisa de modelo. Ela é mapeada automaticamente pelo *has_and_belongs_to_many*. Para adicionar uma categoria a um livro:

    book.categories << Category.find(1)
    book.save

E para recuperar todos os livros de uma categoria pode-se fazer:

    books = Category.find(1).books

Dentro da variável *books* estarão todos os livros(um array de livros) que pertencem a categoria com id igual a 1. O mesmo vale no sentido contrário:

    categories = Book.find(1).categories

A variável *categories* será um array das categorias a qual o livro com id igual a 1 pertence. Simples não?

Mas e se o relacionamento em si possuir atributos também? No nosso caso, isso significa a tabela *books_categories* possuir atributos que pertencem ao relacionamento, e não a categoria ou ao livro isoladamente. Esse caso não é tratado pelo *has and belongs to many*. É aí que entra o *has many through*.

Alterando o modelo de dados para:

p{text-align: center}. <img src="http://mergulhao.info/assets/2007/5/18/activerecord2.png" style="border: 0px;" alt="activerecord1.png" />

Temos agora a substituição da tabela *books_categories* pela tabela *comments*, que provê as mesmas informações da anterior e mais um comentário. Então agora cada livro possui um comentário que por sua vez está associado a uma categoria. Esse comentário poderia ser usado, por exemplo, para explicar por que a pessoa que cadastrou o livro incluiu-o naquela categoria. Os modelos ficam agora:

    class Book < ActiveRecord::Base  
      has_many :comments  
      has_many :categories, :through => :comments
    end  


    class Comment < ActiveRecord::Base  
      belongs_to :book  
      belongs_to :category  
    end  


    class Category < ActiveRecord::Base  
      has_many :books, :through => :comments    
    end  


Agora podemos fazer coisas como:

    category = Category.find(1)
    comment = Comment.new :content => "meu comentario", :category => category
    book.comments << comment
    book.save

Ou apenas:

    book.categories << Category.find(1)

E o comentário virá em branco. Pode-se também:

    books = Category.find(1).books

Que retornará todos os livros pertencentes a uma categoria. Podemos também:

    categories = Books.find(1).categories

Onde teremos todas as categorias de um livro. Além disso:

    comments = Books.find(1).comments

Onde teremos todos os comentários de um livro. Lembrando que cada objeto *comment* ainda possui a categoria associada a ele.

Para testar as coisas e garantir que o código que eu escrevi aqui estava ok, no fim eu resolvi testá-lo. E usei migração para geração da base de dados, como forma fácil de *migrar* do primeiro modelo para o segundo. Então esse poderá ser o tema do próximo post.

Por favor, se encontrar qualquer erro nas informações ou no código, não exite em informar nos comentários para que eu possa corrigir.

