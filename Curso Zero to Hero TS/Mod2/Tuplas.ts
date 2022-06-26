const tuplas = (nome: string[], idade: number) => {};

console.log(
  tuplas(['Vinicius', 'Gouveia'], 21)
);

type Nome = 
    | [primeiroNome: string, segundoNome: string]
    | [primeiroNome: string, segundoNome: string, terceiroNome: string];


function criarPessoa(...nome: Nome) {
  return [...nome]
}

console.log(criarPessoa('Vincius', 'Gouveia' ));
console.log(criarPessoa('Francisco', 'Vinicius', 'Gouveia' ));