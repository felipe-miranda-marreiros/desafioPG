/**
 *
 * @param {*} string recebe uma string como parâmetro.
 * @returns retorna se a senha é válida ou precisa de caracteres
 * necessários para ser considerada segura.
//

/*função responsável por verificar o tamanho e retornar quantas caracteres
são necessários*/
const validarTamanho = (string) => {
  if (string === "" || string.length < 6) {
    return `A senha precisa ter no mínimo 6 caracteres. Sua senha tem ${
      string.length
    } caracteres e precisa de mais ${Math.abs(
      string.length - 6
    )} caractere(s) restante(s).`;
  } else {
    return "Sua senha tem mais de 6 caracteres.";
  }
};
/*função responsável por verificar se string possui pelo menos um digito*/
const validarDigito = (string) => {
  return !string.match(/\d+/g)
    ? "A senha precisa ter no mínimo 1 digito."
    : "Sua senha contém digito.";
};
/*função responsável por verificar se string possui pelo menos uma letra minúscula*/
const validarLetraMinu = (string) => {
  return !string.match(/[a-z]/g)
    ? "A senha precisa ter no mínimo 1 letra minúscula."
    : "Sua senha tem uma letra minúscula.";
};
/*função responsável por verificar se string possui pelo menos uma letra maiúscula*/
const validarLetraMaiu = (string) => {
  return !string.match(/[A-Z]/g)
    ? "A senha precisa ter no mínimo 1 letra maiúscula."
    : "Sua senha tem uma letra maiúscula.";
};
/*função responsável por verificar se string possui pelo menos um caractere especial*/
const validarCaractere = (string) => {
  return !string.match(/[!$%^&*#@()-+]/g)
    ? "A senha precisa ter no mínimo 1 caractere especial: !@#$%^&*()-+"
    : "Sua senha possui um caractere especial.";
};
//função que reuni todos os métodos para serem testadas
const validarSenha = (string) => {
  //Array com todas as funções sendo testas
  const teste = [
    validarTamanho(string),
    validarDigito(string),
    validarLetraMinu(string),
    validarLetraMaiu(string),
    validarCaractere(string),
  ];
  //retorno dos testes feitos na Array para que o usuário saiba o que falta na senha
  const validacao = teste.forEach((el) => console.log(el));

  return validacao;
};

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Entrada: ", (n) => {
  `Saída:\n${validarSenha(n)}`;
  readline.close();
});
