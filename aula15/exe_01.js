
//Crie uma função que receba um Array com produtos no seguinte formato:{nome: "Banana", valor: 10 } e calcula o valor total da compra.

let produtos = [
    {nome: "Banana", valor:10},
    {nome: "Maça", valor:30},
    {nome: "Uva", valor:15},
    {nome: "Pera", valor:45},
    {nome: "Graviola", valor:25},
    {nome: "Acerola", valor:5}
]

let soma = 0
for (let itens of produtos) {
    soma += itens.valor
}
console.log(`A soma total dos produtos é de R$${soma},00.`)

// RESPOSTA: 130

