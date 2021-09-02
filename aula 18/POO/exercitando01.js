
//OBEJTO CANETA
const caneta = {
    nome: 'Compactor Economic',
    tampa: true,
    corTinta: 'azul',
    altura: 14.5,
    grossura: 0.8,
    codigo: 'BAB1',
    corTubo: 'transparente',
    ponta: 0.1,
    
    Detalhes(){
        return `Essa é a caneta ${this.nome}, seu código é ${this.codigo}.
        Ficha técnica:
        Cor: ${this.corTinta}
        Ponta: ${this.ponta}`
    },
    tampar(){
        return true
    },
    escrever(){
        return true
    }
}

console.log(caneta)

// _____________________________________________________________________________________________________________________________ //

//CLASSE CANETA
class Caneta{
    constructor(nome, tampa, corTinta, altura, grossura, codigo, corTubo, ponta){
        this.nome = nome;
        this.tampa = tampa;
        this.cor = corTinta;
        this.altura = altura;
        this.grossura = grossura;
        this.codigo = codigo;
        this.corTubo = corTubo;
        this.ponta = ponta;
    }

}

let caneta01 = new Caneta ('Glitz Faber Casteli', 'true', 'vermelho', 15, 0.9, 'BAB2', 'rosa transparente', '0.15')
let caneta02 = new Caneta ('BIC AZUL', 'true', 'azul claro', 14, 0.7, 'BAB3', 'azul claro transparente', '0.1')
let caneta03 = new Caneta ('BIC ROXA', 'true', 'roxo', 14, 0.7, 'BAB4', 'roxo transparente', '0.1')
console.log(caneta01, caneta02, caneta03)

