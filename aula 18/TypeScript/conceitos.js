
/* 

Resumo conceitos importantes:

Os recursos do TypeScript são extremamente úteis: por exemplo, permite-nos adicionar tipos ao código JavaScript normal. Ele também verifica se há erros de sintaxe antes mesmo do tempo de execução. Ele ainda fornece dicas de ferramentas que mostram por que alguns códigos podem gerar um erro.

** TypeScript é um superconjunto de JavaScript que adiciona tipos.

** O sistema de tipos se refere ao entendimento do TypeScript de como seu código deve funcionar: principalmente quais tipos de dados devem ser armazenados em suas variáveis.

** O TypeScript espera que o tipo de dados da variável corresponda ao tipo do valor inicialmente atribuído a ela em sua declaração - isso é conhecido como inferência de tipo .

** A forma de um objeto descreve, entre outras coisas, quais propriedades e métodos ele contém ou não. O TypeScript sabe não apenas que tipo algo é, mas também que forma esse tipo tem.

** Quando não é capaz de inferir um tipo, o TypeScript irá considerar uma variável como sendo do tipo any.

** As anotações de tipo são pequenos pedaços de código que indicam que tipo uma variável deve ser.


Comandos: tsc >>> ls >>> node index.js


let name:string = 'Telmi'

let inteiro:number = 5

let bonita:boolean = true

let qualquerCoisa; //any


let first: string;
first = 'Anders';
 
/ Error: Type 'number' is not assignable to type 'string'
first = 1337;

*/