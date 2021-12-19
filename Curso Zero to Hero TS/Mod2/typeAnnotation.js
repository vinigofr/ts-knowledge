"use strict";
// ==> Variáveis
let nome = "Vinicius";
console.log(nome);
// ==> Arrays de string
let animais = ["Cachorro", "Gato", "Papagaio"];
console.log(animais);
// ==> Objetos
let carro;
carro = { nome: "Fusca", preco: 20000, ano: 1980 };
console.log(carro);
// ==> Função
const sum = (a, b) => a + b;
console.log(sum(1, 2)); // 3
// ==> boolean (PRIMITIVO)
let estaChovendo = true;
console.log(estaChovendo);
// ==> number
let altura = 1.80;
let bin = 0b1010;
let oct = 0o744;
let hex = 0xFF;
// ==> bigint (seguido de `numero + n`, disponível a partir do ES2020)
let idade = 1234567890123456789012345678901234567890n;
let bigBin = 21274493n;
let bigOct = 287479510360542183204652n;
let bigHex = 0xfff00ff00ffabcd1500152n;
// ==> Array de tipos específicos
// Números
let notas = [1, 2, 3, 4, 5];
let notas2 = [1, 2, 3, 4, 5];
// Strings
let nomes = ["Leo", "Leo", "Leo"];
let nomes2 = ["Leo", "Leo", "Leo"];
// Array com vários tipos primitivos (Turple) ()
let alunos = [
    "Leo",
    1,
    { nome: "Leo", idade: 20 },
    true,
    1234567890123456789012345678901234567890n, // bigingt
];
// Definindo os tipos de valores fixos em um array, na mesma ordem
let alunos2 = [34, "Leo", "Leo"];
