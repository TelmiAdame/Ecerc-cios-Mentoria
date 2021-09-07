

// CLASSE CANETA COM GET E SET
class Caneta{
    constructor(nome, cor, codigo, tampa){
        this.name = nome;
        this.color = cor;
        this.code = codigo; //_code -> convenção que só deve ser alterada internamente 
        this.tampa = tampa
    }


    get valorName(){
        return this.name
    }
    set valorName(nome) {
        return this.name = nome + 2
    }

}

let preferida = new Caneta ('BIC ROXA','roxo', 'BAB4')
console.log(preferida.valorName, preferida.valorName)        