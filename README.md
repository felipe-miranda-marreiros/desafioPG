Repositório faz parte da terceira etapa do Desafio de Programação da Academia Capgemini 2022.

Linguagem utilizada: <span style="color:#E3710C;"><strong>JavaScript</strong></span> (<a href="https://262.ecma-international.org/6.0/" target="_blank">ECMAScript® 2015</a> e superior).

## Estrutura do Repositório

```
📦 01 - Desafio
├─ desafio_1.js
└─ desafio_1_input
📦 02 - Desafio
├─ desafio_2.js
└─ desafio_2_input
📦 03 - Desafio
├─ desafio_3.js
└─ desafio_3_input
```

## Guia de Expressões Regulares

Expressões regulares são uma sequência de caracteres que tem como objetivo buscar um certo padrão em uma string.
Desafios 1 e 2 usam expressões regulares. Aqui está uma breve definição deles.

| Expressão Regular | Descrição                                                                     |
| ----------------- | ----------------------------------------------------------------------------- |
| /\n\*$/           | Verifica se há quebra de linha na última sequência de strings.                |
| \n                | Cria uma quebra de linha.                                                     |
| /\d+/g            | Verifica se uma string possui pelo menos um digito.                           |
| /[a-z]/g          | Verifica se uma string possui letras minúsculas.                              |
| /[A-Z]/g          | Verifica se uma string possui letras maiúsculas.                              |
| /[!$%^&*#@()-+]/g | Verifica se uma string possui caracteres especiais, tais como (!$%^&\*#@()-+) |

## Documentação

Foi utilizado API do JSDoc. Você adiciona comentários diretamente ao seu código-fonte, ao lado do próprio código.

## Referências

#### Creating your own Custom Regular Expression

- https://support.bettercloud.com/s/article/Creating-your-own-Custom-Regular-Expression-bc72153

#### JavaScript MDN

- https://developer.mozilla.org/en-US/docs/Web/JavaScript

#### JSDoc

- https://jsdoc.app/index.html
