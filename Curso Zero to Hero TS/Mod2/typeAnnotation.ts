// ==> Variáveis
let nome: string = "Vinicius";
console.log(nome);

// ==> Arrays de string
let animais: string[] = ["Cachorro", "Gato", "Papagaio"];
console.log(animais);

// ==> Objetos
let carro: { nome: string, preco: number, ano: number }

carro = { nome: "Fusca", preco: 20000, ano: 1980 }
console.log(carro);

// ==> Função
const sum = (a: number, b: number) => a + b;
console.log(sum(1, 2)); // 3

// ==> boolean (PRIMITIVO)
let estaChovendo: boolean = true;
console.log(estaChovendo);

// ==> number
let altura: number = 1.80;
let bin: number = 0b1010;
let oct: number = 0o744;
let hex: number = 0xFF;

// ==> bigint (seguido de `numero + n`, disponível a partir do ES2020)
let idade: bigint = 1234567890123456789012345678901234567890n;
let bigBin: bigint = 0b1010001001001111101111101n;
let bigOct: bigint = 0o74700456446523012154123454n;
let bigHex: bigint = 0xFFF00FF00FFABCD1500152n;

// ==> Array de tipos específicos
// Números
let notas: number[] = [1, 2, 3, 4, 5];
let notas2: Array<number> = [1, 2, 3, 4, 5];

// Strings
let nomes: string[] = ["Leo", "Leo", "Leo"];
let nomes2: Array<string> = ["Leo", "Leo", "Leo"];

// Array com vários tipos primitivos (Turple) ()
let alunos: Array<string | number | object | boolean | bigint> = [
  "Leo", // string
  1,    // number
  { nome: "Leo", idade: 20 }, // object
  true, // bool
  1234567890123456789012345678901234567890n, // bigingt
];

// Definindo os tipos de valores fixos em um array, na mesma ordem
let alunos2:  [number, string, string] = [34, "Leo", "Leo"];
