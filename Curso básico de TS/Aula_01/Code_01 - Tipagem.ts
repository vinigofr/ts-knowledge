// Tipando dados em TS

class Default {
  texto: string;
  numero: number;
  bool: boolean;
  qualquer: any;
  array: Array<number>;
  // array: Array<string>;
  // array: Array<any>;
  // array: any[];
  constructor() {
    this.função;
  }

  função() {
    this.texto = 'Este é um alerta em TS!';
    return (this.texto);
  }

}