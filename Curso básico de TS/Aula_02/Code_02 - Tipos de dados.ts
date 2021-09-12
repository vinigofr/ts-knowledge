// Definindo os tipos de arquivos que terão em um array
// Sintaxe do turple.
let persons: [string, number, boolean] [] = [
    ['Rafael', 25, true],
    ['Vinicius', 21, true],
] 

function função() {
  persons.forEach((person, i) => {
    console.log(person[i])
  })
}

// Usando Enum para criar classificação de dados.
// Onde enum é como se fosse um objeto com chave e valor.
// Dando o console.log, é possível verificar o valor da chave.
// Pode ser usado como uma espécie de menu.
enum CardSuits { Clubs, Diamonds, Hearts, Spades };

function função_2() {
  console.log(CardSuits);
}

função_2();