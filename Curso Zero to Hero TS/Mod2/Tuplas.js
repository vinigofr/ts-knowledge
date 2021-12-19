"use strict";
const tuplas = (nome, idade) => { };
console.log(tuplas(['Vinicius', 'Gouveia'], 21));
function criarPessoa(...nome) {
    return [...nome];
}
console.log(criarPessoa('Vincius', 'Gouveia'));
console.log(criarPessoa('Francisco', 'Vinicius', 'Gouveia'));
