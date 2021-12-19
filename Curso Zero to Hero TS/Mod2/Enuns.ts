// Estrutura do Enum numérico

enum Idioma_NUM {
  Portugues,
  Espanhol,
  Ingles,
  Frances,
}

// Estrutura de Enum string
enum Idioma_STRING {
  Portugues = 'PT-BR',
  Espanhol = 'ES',
  Ingles = 'EN',
  Frances = 'FR',
}

const enum Comida {
  Hamburguer,
  Massa,
  Pizza,
  Churras,
};

function comida(c: Comida) {
  console.log(c);
  return 'Comidas muito apetitosas!';
}

console.log(comida(Comida.Pizza));