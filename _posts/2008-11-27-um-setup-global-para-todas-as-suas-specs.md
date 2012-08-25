--- 
layout: post
title: 'Um "setup" global para todas as suas specs'
categories: 
  []
tags:
  - rails
  - bdd
  - rspec
---


Ficou bem difundido no rspec a forma em como fazer o setup antes das specs executarem, assim como existe também no Test::Unit.

    describe Act do
      before(:each) do
        (...)
      end

      it "should have many persons associated" do
       (...)
      end
    end

Eu estava precisando fazer o setup para todas as minhas specs (do planeta :), então descobri uma forma que está mal documentada(pelo menos eu não achei bom), mas é super simples de usar. É só editar o _spec/spec\_helper.rb_ e adicionar dentro do bloco:

    Spec::Runner.configure do |config|
      (...)
    end

O seguinte:

    config.before(:each) do
      your_global_setup_here
    end

Você também pode executar o setup somente para os _controllers_, _models_ ou _helpers_ assim:

    config.before(:each, :behaviour_type => :controller) do
      your_global_controllers_setup_here
    end

Ou

    config.before(:each, :behaviour_type => :helper) do
      your_global_helpers_setup_here
    end

Ou 

    config.before(:each, :behaviour_type => :model) do
      your_global_models_setup_here
    end

Como se chama o "setup" no bdd? É setup mesmo?


