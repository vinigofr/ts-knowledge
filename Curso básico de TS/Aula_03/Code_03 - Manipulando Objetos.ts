// Este método evita que dados estejam faltando em um objeto.
// Também evita inserção do tipo inesperado.
// Quando passado "?", significa "OPCIONAL".

const vinicius: {
  nome: string,
  idade: number,
  altura: number,
  peso: number,
  andando?: boolean
} = {
  nome: "Vinicius",
  idade: 21,
  altura: 1.73,
  peso: 70,
  andando: false,
}

// OU


// Usando este método, você pode setar os tipos
// de dados tanto para chave, quanto para valor.
// Sintaxe abaixo:

const vinicius2: {
  [key: number]: any
} = {
  1: "teste",
}

// Em chamadas funcionais, você pode também definir parâmetros como opcionais.

function fun(nome: string, sobrenome?: string) {
  return nome + " " + sobrenome;
}

fun('Vinicius');