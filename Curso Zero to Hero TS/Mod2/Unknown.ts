// A diferença de any para unknown

// Any: Não verifica o tipo de var ou func

// Unknown: Verifica antes de qualquer operações, assim, evitando erros.

// Sintaxe:
const desconhecido: unknown = 1;

// Se uma variável for declarada no tipo "unknown", ela não pode ter seu reuso efetivado. 

// Ex:

// Declarando a variável

/*let variável: unknown;

// Caso for de nosso desejo aproveitar a variável de cima para criação de outras variáveis de outros tipos, não será possível.

let valor1: boolean = variável;
let valor2: any = variável;
let valor3: any[] = variável;
let valor4: string = variável;*/
