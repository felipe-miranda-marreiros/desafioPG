//Essa parte do código é necessária para utilizar o input do usuário.
//"desafio_1_input" é o espaço reservado para entrada de valores.
const input = require("fs").readFileSync(
  "01 - Desafio/desafio_1_input",
  "utf-8"
);
///////////////////////////////////////////////////////////////////////////////////////////

/**
 * A função "fazerEscada" recebe como argumento um valor de tamanho N e constroi uma escada.
 *
 * @param {*} Number função recebe um dado do tipo número em seu parâmetro.
 * @returns {caractere (*)} retorna o caractere (*) de acordo com o input do usuário.
 */
//
function fazerEscada(n) {
  let resultado = "";

  if (n <= 0 || n === "") {
    return console.log("Nenhum valor encontrado.");
  } else {
    /*Este loop (i) tem como propósito criar uma nova linha(\n) a cada
    iteração de j e k*/
    for (let i = 1; i <= n; i++) {
      /*Este loop (j) tem como propósito criar espaços.
      Se j for maior ou igua a i, então um novo espaço em branco será criado*/
      for (let j = n - 1; j >= i; j--) {
        resultado += " ";
      }
      /*Este loop (k) tem como propósito criar o caractere (*) se k for menor ou igual a i*/
      for (let k = 1; k <= i; k++) {
        resultado += "*";
      }
      resultado += "\n";
    }
  }

  /*Retornamos o resultado sem a criação de uma nova linha com ajuda
  de uma expressão regular e o método replace()*/
  return console.log(resultado.replace(/\n*$/, ""));
}

fazerEscada(input);
