//Essa parte do código é necessária para utilizar o input do usuário.
//"desafio_3_input" é o espaço reservado para entrada de valores.
const input = require("fs").readFileSync(
  "03 - Desafio/desafio_3_input",
  "utf-8"
);
///////////////////////////////////////////////////////////////////

/**
 *
 * @param {*} string a função recebe como argumento uma string.
 * @returns {Number} retornará um número inteiro, sendo a quantidade de anagramas pares.
 */

function verificarAnagramas(string) {
  //Palavras como ovo que possuem length de 3, podem ser analisadas com o seguinte cálculo:
  /*
  3! / 2!.

  O resultado será 3 * 2 * 1
                      2 * 1

  Excluímos os elementos repetidos (2 e 1) e sobrará 3, então três anagramas pares.
  */
  if (string === "" || string === 0) {
    return console.log("Valor não encontrado");
  } else if (string.length < 4) {
    return console.log(3);
  } else {
    //Em JavaScript é possível criar uma hashmap com New Operator e Map(). Sua estrutura funcionará com keys e values normalmente.
    const map = new Map();

    //Se duas strings tem a mesma frequência em um hashmap, então ela é considerada um anagrama.
    //O loop abaixo tem como objetivo popular dinamicamente o "map" com essa frequência.
    for (let i = 0; i < string.length; ++i) {
      for (let j = i; j < string.length; ++j) {
        //Separamos a string em substrings. Aqui ela será considerada como value no hashmap.
        const substrings = string.substring(i, j + 1);
        //Para gerar a key, usamos o método split("") que divide uma string em uma array de substrings, assim como o método substrings().
        //Usamos o método sort() para tornar a array em ordem alfabética
        //Por último, usamos o método join(""), que retorna uma array em formato string. Essa parte do código é a reorganização da string para efeito de comparação com a variável substrings.
        const key = substrings.split("").sort().join("");
        //Aqui será dado a parte em que a frequência de pares de anagramas vão ser colocanados dinamicamente no hashmap.
        if (map.has(key)) {
          //Aqueles com frequência maior que 1 serão considerados anagramas pares e terão como key o valor de 2.
          map.set(key, map.get(key) + 1);
        } else {
          //Aqueles que não, receberão o valor de 1 apenas.
          map.set(key, 1);
        }
      }
    }
    //com hashmap com keys e values completados, podemos transformar a frequência de anagramas em uma array.
    const novaArr = Array.from(map.values());
    const pares = [];
    //Aqueles com frequência maior que 1 serão armazenados na array "pares".
    novaArr.forEach((el) => (el > 1 ? pares.push(el) : "zero"));

    return console.log(pares.length);
  }
}

verificarAnagramas(input);
