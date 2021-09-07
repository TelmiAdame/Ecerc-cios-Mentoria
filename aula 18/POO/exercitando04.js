

//UFC

class Lutador {

    constructor (nome, nacionalidade, idade, altura, peso, categoria, vitorias, derrotas, empates) {
        this.nome = nome,
        this.nacionalidade = nacionalidade,
        this.idade = idade,
        this.altura = altura,
        this.peso = peso,
        this.categoria = categoria,
        this.vitorias = vitorias,
        this.derrotas = derrotas,
        this.empates = empates
    }

    //Métodos:
    apresentar(){
        return `Vamos Começar! Nosso lutador se chama ${this.nome}, seu país de origém é ${this.nacionalidade}, tem ${this.idade} anos, ${this.altura}m de altura, pesando ${this.peso}kg - categoria: ${this.categoria}. Até o momento ${this.nome} acumula ${this.vitorias} vitórias, ${this.derrotas} derrotas e ${this.empates} empates!`
    }
    status(){
        return`
            Nome: ${this.nome}
            Peso: ${this.peso}
            Vitórias: ${this.vitorias}
            Derrotas: ${this.derrotas}
            Empates: ${this.empates}
            `
    }
}
   
//Criando lutadores

let lutador01 = new Lutador('Pretty Boy', 'França', 31, 1.75, 68.9, 'leve', 11, 2, 1)
let lutador02 = new Lutador('Putscript', 'Brasil', 29, 1.68, 57.8, 'leve', 14, 2, 3)
let lutador03 = new Lutador('Snapshadow', 'EUA', 35, 1.65, 80.9, 'médio', 12, 2, 1)
let lutador04 = new Lutador('Dead Code', 'Austrália', 28, 1.93, 81.6,'médio', 13, 0, 2)
let lutador05 = new Lutador('Ufocabol', 'Brasil', 37, 1.70, 119.3, 'pesado', 5, 4, 3)
let lutador06 = new Lutador('Nerdaard', 'EUA', 30, 1.81, 105.7, 'pesado', 12, 2, 4)


console.log(lutador01.apresentar())
console.log(lutador02.apresentar())
console.log(lutador03.apresentar())
console.log(lutador04.apresentar())
console.log(lutador05.apresentar())
console.log(lutador06.apresentar())