# Frontend Challenge 2022

Este projeto é um simples ToDo List, com um bug incluso. O objetivo é encontrar e corrigir o bug, para
que o projeto funcione em modo desenvolvimento.

## Instalação e execução

- Considere utilizar NodeJs na versão 14.19.3
- Clone o respositório e execute `yarn`
- Então execute `yarn start`

Este último comando iniciará a API e então o app. A API é provida em `http://localhost:3333/api` e o app
em `http://localhost:4200`  
Sempre que projeto for reiniciado, o banco de dados é reiniciado também

## Funcionalidades

É possível executar as seguintes ações:

* iniciar a tarefa (faz ela ir para "Em Andamento")
* concluir uma tarefa (faz ela ir de "Em Andamento" para "Concluídos")
* voltar uma tarefa de "Em Andamento" para "Pendentes"
* voltar uma tarefa de "Concluídos" para "Em Andamento"
* excluir uma tarefa em qualquer status
* criar novas tarefas

## Bugs

Intencionalmente, um bug foi introduzido. E ele impede que novas tarefas sejam criadas, ou que as tarefas sejam
excluídas.

## Objetivo

Identificar a causa do bug e propor a solução, indicando o trecho de código responsável pelo erro e o que deve ser
corrigido.

## Extras

* Implementar uma confirmação de exclusão
* Implementar feedback de "processando"
* Implementar feedback de erro.

## Entrega e regras

**Não reimplemente o projeto para solucionar o problema.** O objetivo principal é avaliar a capacidade de diagnóstico e
entendimento das tecnologias envolvidas.

* Caso implemente as tarefas "extras", crie um novo respostório, público, na sua conta, e nos envie por email o link.
  Não faça um fork.
* Caso não implemente as tarefas "extras", nos envie o diagnóstico do bug e a solução, por email

