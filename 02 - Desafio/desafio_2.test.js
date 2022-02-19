const validarTamanho = require("./desafio_2");

test("A senha precisa de no mínimo 6 caracteres", () => {
  expect(validarTamanho("Ya3")).toBe(
    `A senha precisa ter no mínimo 6 caracteres. Sua senha tem ${3} caracteres e precisa de mais ${3} caractere(s) restante(s).`
  );
});
