/*
Exercício 01

Adicionando dinheiro na carteira 
Crie uma função JavaScript que receba o seguinte array e retorne um array com a
multiplicação de cada elemento por 2:

[2 ,4, 6, 8, 10, 12, 14, 16, 18, 20]

*/

let carteira = [2 ,4, 6, 8, 10, 12, 14, 16, 18, 20]

let newCarteira = carteira.map (element => {
    return element * 2
} )

console.log(newCarteira)


//OU  com arrow function:

let carteira = [2 ,4, 6, 8, 10, 12, 14, 16, 18, 20]

let newCarteira = carteira.map (element =>  element * 2)
console.log(newCarteira)

/* 
[
   4,  8, 12, 16, 20,
  24, 28, 32, 36, 40
]
*/