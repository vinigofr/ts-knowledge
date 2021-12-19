// O tipo any no TS será automáticamente atribuido quando não há atribuição de tipagem.

// Somente como úlimo recurso.

// Sintaxe:
let nomeVar: any;

const form: {[formField: string]: any} = {
  nome: 'Vinicus',
  sobrenome: 'Gouveia',
  idade: 21 
};

console.log(form);