/**
 *
 * @param {*} string a função recebe como argumento uma string.
 * @returns {Number} retornará um número inteiro, sendo a quantidade de anagramas pares.
 */

function verificarAnagramas(string) {
  if (string === "" || string === 0) {
    return "Valor não encontrado";
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

    return pares.length;
  }
}

//Input que faz parte do Node. É necessário ter Node instalado.
//A função abaixo tem como objetivo obter a Entrada(valor) e mostrar Saída(resultado).
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Entrada: ", (n) => {
  console.log(`Saída:\n${verificarAnagramas(n)}`);
  readline.close();
});

module.exports = verificarAnagramas;
