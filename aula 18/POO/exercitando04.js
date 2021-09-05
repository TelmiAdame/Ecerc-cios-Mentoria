

//UFC

class Lutador {
    nome;
    nacionalidade;
    idade;
    altura;
    peso;
    categoria;
    vitorias;
    derrotas;
    empates;

    constructor (nome, nacionalidade, idade, altura, peso, vitorias, derrotas, empates) {
        this.nome = nome,
        this.nacionalidade = nacionalidade,
        this.idade = idade,
        this.altura = altura,
        this.setPeso(peso) = peso, //Qual a difereça de fazer pelo set e diretamente pelo atributo?
        this.vitorias = vitorias,
        this.derrotas = derrotas,
        this.empates = empates
    }

    //Métodos:
    apresentar(){
        return `Vamos Começar! Nosso lutador se chama ${this.nome}, seu país de origém é ${this.nacionalidade}, tem ${this.idade} anos, ${this.altura}m de altura, pesando ${this.peso}kg - categoria: ${this.setCategoria}. Até o momento ${this.nome} acumula ${this.setVitorias}, ${this.setDerrotas} e ${this.setEmpates}!`
    }
    status(){
        return`
            Nome: ${this.getNome}
            Peso: ${this.getPeso}
            Vitórias: ${this.getVitorias}
            Derrotas: ${this.getDerrotas}
            Empates: ${this.getEmpates}
            `
    }

    ganharLuta(){ }
    perderLuta(){ }
    empatarLuta(){ }

    //GETTERS
    getNome(){
        this.nome
    }
    getNacionalidade(){
        this.nacionalidade
    }
    getIdade(){
        this.idade
    }
    getAltura(){
        this.altura
    }
    getPeso(){
        this.peso
    }
    getCategoria(){
        this.categoria
    }
    getVitorias(){
        this.vitorias
    }
    getDerrotas(){
        this.derrotas
    }
    getEmpates(){
        this.empates
    }

    //SETTERS
    setNome(no){
        this.nome = no
    }
    setNacionalidade(na){
        this.nacionalidade = na
    }
    setIdade(id){
        this.idade = id
    }
    setAltura(al){
        this.altura = al
    }

    //Sempre que peso for definido, também vamos defirnir a categoria automáticamente.
    setPeso(pe){
        this.pe = pe
        setCategoria()
    }

    setCategoria(){
        if(this.peso < 52){
            this.categoria = 'Inválido'  //Não pode lutar.
        }else if(this.peso > 52 && this.peso <= 70){
            this.categoria =  'leve'
        }else if(this.peso > 70 && this.peso <= 100) {
            this.categoria =  'médio'
        }else if(this.peso > 100 && this.peso <= 120){
            this.categoria = 'pesado'
        }else{
            this.categoria = 'Inválido' //Não pode lutar.
        }
    }
    
    setVitorias(){
        this.setVitorias = this.getVitorias + 1 
        // ou this.vitorias = this.vitoruias + 1
    }
    setDerrotas(){
        this.setDerrotas = this.getDerrotas + 1
    }
    setEmpates(){
        this.setEmpates = this.setEmpates + 1
    }
}

//Criando lutadores
let lutador01 = new Lutador('Pretty Boy', 'França', 31, 1.75, 68.9, 'leve', 11, 2, 1)
let lutador02 = new Lutador('Putscript', 'Brasil', 29, 1.68, 57.8, 'leve', 14, 2, 3)
let lutador03 = new Lutador('Snapshadow', 'EUA', 35, 1.65, 80.9, 'médio', 12, 2, 1)
let lutador04 = new Lutador('Dead Code', 'Austrália', 28, 1.93, 81.6,'médio', 13, 0, 2)
let lutador05 = new Lutador('Ufocabol', 'Brasil', 37, 1.70, 119.3, 'pesado', 5, 4, 3)
let lutador06 = new Lutador('Nerdaard', 'EUA', 30, 1.81, 105.7, 'pesado', 12, 2, 4)

/*
console.log(lutador01)
console.log(lutador02)
console.log(lutador03)
console.log(lutador04)
console.log(lutador05)
console.log(lutador06)
*/

console.log(lutador01.apresentar())

lutador01.ganharLuta()
lutador01.status
