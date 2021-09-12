// Criando e usando interfaces.

export interface User {
  name: string;
  age: number;
  active?: boolean;
}

// Se a gente fala que uma variável é do tipo "User", a gente pode
// atribuir a ela todas as propriedades que a interface User possui como exigencia.

let usuário: User = {
  name: "João",
  age: 20,
  // active: true,
}