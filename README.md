# Olarrr, On8! Vamos avançar em React!😃

Semana 15, já? E vamos descobrir o principal motivo pelo qual o react é o queridinho do mundo front-end. 

Hoje vamos estudar: Hooks, eventos e estado. Seus conceitos fundamentais e exemplos reais de aplicação.

Nossa aula será dividida em duas partes:

1- Conceitos e primeiros passos com react hooks ❤️ <br>
2- Partiu codar 🚀

E como sempre, após esse momento de treino e de tira-dúvidas irei passar nossa tarefinha de casa!


---

## O que são react hooks?

Hooks são uma nova adição ao React 16.8. Eles permitem que você use o state e outros recursos do React sem escrever uma classe. Foi lançada na React Conf 2018.

Hooks são funções que permitem a você “ligar-se” aos recursos de state e ciclo de vida do React a partir de componentes funcionais.

Olha aqui a documentação oficial do [React Hooks](https://www.youtube.com/watch?v=O6P86uwfdR0&list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h).

### Hooks internos

Funções feitas pelo time do react e pela comunidade para nos ajudar a resolver problemas de ciclo de vida e estado.

Vamos aprender hoje os 2 principais hooks internos:

* useState: atualiza o estado
* useEffect: gera efeito na tela ao atualizar estado ou na montagem do componente

Uma playlist no youtube para aprender [Hooks internos](https://pt-br.reactjs.org/docs/hooks-intro.html)


### Atenção!
* O que useState retorna? Ele retorna um par de valores: o state atual e uma função que atualiza o state

* Não chame Hooks dentro de loops, condições ou funções aninhadas

* Podemos criar as nossas próprias [hooks customizadas](https://pt-br.reactjs.org/docs/hooks-custom.htm)

## State?

Serve para fazer um componente ter o poder mágico de guardar dados na memória!

**Como usar useState em 3 passos:** 

    1- Importe { useState }
    2- Faça a atribuição via desestruturação
    3- Declare no jsx

## Ciclo de Vida?

Antes do componente ser montado
Depois do componente ser montado

## Eventos

React é uma lib de javascript, então também temos eventos acontecendo por aqui e é possível captura-los. Vamos aprender hoje os 2 principais eventos:

* onClick 
* onChange


**Pensando do jeito react:**

Como componentizar e determinar o tipo de cada componente.
Props ou state?

**A tríade do react:**
* Visual: o retorno dos elementos nos componentes
* Funcional: as funções de javascript que dão vida aos componentes
* Estado: Cria o poder de memória nos componentes

**Dicionário react - parte 2:**

* hooks: ganho, funções internas e customizadas para ajudar a resolver ciclo de vida e estado de componentes
* state: memória para manipular dados em componentes


<br>

**Exemplos:**

| Recurso | Descrição |
| --- | --- |
| `onClick` | Mostrando no console o evento de click funcionando! |

| Recurso | Descrição |
| --- | --- |
| `onChange` | Mostrando no console o valor digitado num formulário!! |

| Recurso | Descrição |
| --- | --- |
| `contador de clicks` |  Agora vamos treinar criar componentes, guardar memória no componente e atualizar na tela a quantidade de vezes que um botão está sendo clicado. |

| Recurso | Descrição |
| --- | --- |
| `Contador` |  Agora vamos treinar criar componentes, guardar memória no componente e atualizar na tela um contador que soma 1 ou diminui 1 toda vez que o botão for clicado.|

| Recurso | Descrição |
| --- | --- |
| `Tick` |  Vamos criar um componente que retorna nosso horário local e atualiza automaticamente na tela|

| Recurso | Descrição |
| --- | --- |
| `lista externa` |  Chegou o grande momento de consumir uma api externa e renderizar os dados na tela, vamos usar o useEffect e useState para isso. |

| Recurso | Descrição |
| --- | --- |
| `lista interna + busca` |  Agora vamos treinar criar componentes, consumir dados internos, criar uma barra de busca que filtra o valor digitado atualizando o componente na tela |


| Recurso | Descrição |
| --- | --- |
| `Lista externa  + busca` | Vamos consumir uma api externa, mostrar lista na tela e através de uma busca, vamos mudar o estado apenas mostrando na tela o item digitado. |


---
**Desafio:**

#### Calma! É só mais uma TAREFINHA DE CASA pra chamar de sua! Já treinamos bastante com nossos exemplos na aula!


Vamos criar um projetinho react do zero com direito a componetização, consumo de dados externo, uso de props e hooks internas(state e efeito).

O projeto deverá ter esse comportamento:<br>
  <img src="https://media.giphy.com/media/CvkRAPE68tWueH1Gp8/giphy.gif" alt="gif" width="300">

> Passo a passo:
1) Crie um projeto react
2) Apague as informações default
3) Consuma uma API externa
4) Crie um componente título que recebe o texto: "Meu Segundo Projeto React do Zero", a ser renderizado por props ou children
5) Crie 1 componente que mapeia os dados da lista da API e retorna uma lista, ele também tem um input que pega o texto digitado para atualizar o estado do componente, mostrando na tela somente o vlor digitado.
6) Import no App.js os componentes criados, perceba os erros/warnings que o terminal/console mostra, resolva e faça o projeto funcionar.
7) Suba esse projeto no github, atualize o read me contando tudo o que você aprendeu e usou. Iremos disponibilizar uma planilha para a entrega dos links dos repos. A entrega pode ser feita até sexta 20/11.
8) Tente fazer entre domingo e terça, para aproveitar a aula de quarta e monitorias pra tirar dúvidas.
9) Arraseee! E qualquer coisa, me chama!


## Simara Conceição
- [instagram](https://www.instagram.com/simara_conceicao)
- [linkedin](https://www.linkedin.com/in/simaraconceicao/)
- [github](https://github.com/simaraconceicao)
- [spotify](https://open.spotify.com/show/59vCz4TY6tPHXW26qJknh3)
- [quero ser dev](https://queroserdev.com)
- email: contato@simaraconceicao.com
