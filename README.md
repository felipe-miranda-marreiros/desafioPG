Repositório faz parte da terceira etapa do Desafio de Programação da Academia Capgemini 2022.

Linguagem utilizada: <span style="color:#E3710C;"><strong>JavaScript</strong></span> (<a href="https://262.ecma-international.org/6.0/" target="_blank">ECMAScript® 2015</a> e superior).

## Estrutura do Repositório

```
📦 01 - Desafio
├─ desafio_1.js
📦 02 - Desafio
├─ desafio_2.js
📦 03 - Desafio
├─ desafio_3.js
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

## Acessando o Repositório

Há duas maneiras de acessar as aplicações deste repositório:

Primeiro, você precisará de Node, Git e de preferência Vscode instalados.

- <a href="https://nodejs.org/en/">Node<a/> necessário para pegar a Entrada e mostrar a Saída.
- <a href="https://git-scm.com/downloads">Git<a/> para clonar esse repositório.

- <a href="https://code.visualstudio.com/">Vscode<a/> para ter acesso completo ao código.

Com Git instalado, abrir o Git Bash, copiar e colocar o seguinte código:

```
git clone https://github.com/felipe-miranda-marreiros/desafioPG.git
```

ou você pode baixar este repositório clicando em Download Zip

![image](https://user-images.githubusercontent.com/91689754/154537871-21d99722-750c-44b7-8b14-41325fff744a.png)

No final, você se encontrará com as seguintes pastas:
![image](https://user-images.githubusercontent.com/91689754/154509855-74fe08de-2667-42d5-91ed-f446fb95bb4c.png)

Clique em umas das pasta e nela você terá:

```
desafio_x.js
```

![image](https://user-images.githubusercontent.com/91689754/154542869-9a0a4d99-ca10-4bfc-aa41-921fe51b5c2f.png)

Continuando dentro da pasta, abra com o Vscode:

![image](https://user-images.githubusercontent.com/91689754/154543181-6133f915-a535-47ca-84aa-9b6cd8161f2a.png)

Em seguida, abra um o Terminal:

![image](https://user-images.githubusercontent.com/91689754/154543994-7cc4c1bc-261c-4fb7-8079-117e6537cb54.png)

Verifique se o Node está instalado com o código:

```
node -v
```

E por último, você pode acessar a aplicação com o código:

```
node desafio_x.js
```

Substitua x pela número da pasta e no final teremos:

![image](https://user-images.githubusercontent.com/91689754/154544749-5e9e89ab-43b2-4a3a-8b16-ad342597cc33.png)

Faça o mesmo processo para cada pasta.

## Referências

#### Creating your own Custom Regular Expression

- https://support.bettercloud.com/s/article/Creating-your-own-Custom-Regular-Expression-bc72153

#### JavaScript MDN

- https://developer.mozilla.org/en-US/docs/Web/JavaScript

#### JSDoc

- https://jsdoc.app/index.html
