/*
Exercício 2

Clonando um array

Escreva uma função JavaScript para clonar um array.
Onde ela receba um array e passe o conteúdo de um array pelo outro, retirando os valores
duplicados
*/

/* 

TENTATIVA 01
let array = [1, 2,  2, 3]

let newArray = array.map((element) => {
        if (!array.includes(element)) {
            newArray.push(element)
            return newArray
        } 
})
*/

/*TENTATIVA 02

let array = [1, 2,  2, 3]

let newArray = array.map(element => !newArray.includes(element).push(element))

console.log(newArray)
*/


//TENTATIVA 03
let lista = [banana, maça, uva, uva]

let listaSemRepeticao = lista.map(tirarItensRepetidos)
function tirarItensRepetidos(elemento) {
    if (!listaSemRepeticao.includes(elemento)){
        listaSemRepeticao.push(elemento)
        return listaSemRepeticao
    }
}