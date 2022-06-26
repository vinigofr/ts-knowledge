// Nao contem valores
// Nao podemos atribuir valores
// retorna de funcao que gera erro
// Usado em conditional types
// Usado para throw exceptions
// Automaticamente atribuido em loops infinitos

function error(message: string): never {
  throw new Error(message);
}

console.log(error('error'));
