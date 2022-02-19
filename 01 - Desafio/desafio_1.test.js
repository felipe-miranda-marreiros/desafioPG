const fazerEscada = require("./desafio_1");

test("Ser igual ao número de caracteres: n * (*)", () => {
  expect(fazerEscada(6)).toBe("     *\n    **\n   ***\n  ****\n *****\n******");
});
