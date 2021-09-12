import { User } from './Code_04 - Interfaces'

export class Cadastro implements User {
  name: string;
  age: number;
  active?: boolean;
}