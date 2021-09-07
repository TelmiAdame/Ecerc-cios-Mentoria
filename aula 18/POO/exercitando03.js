//Conta Bancária

/*
Ao abrir uma criar uam conta o status dela será false por padrãoe com saldo zerado.
Ao escolher qual tipo de conta o user ganha um saldo, se for  cc R$50, se for cp R$150.
As mensalidades também variam de acordo com a conta cc R$12 e cp R$20.
Só é possível sacar dinheiro caso a conta esteja true e com saldo.
Só é possível fechar a conta caso não tenha saldo e nem débitos. 
*/


class ContaBancaria {
    constructor( user, numeroConta, tipo, saldo = 0, status = 'false'){
        this.user = user;
        this.numeroConta = numeroConta;
        this.tipo = tipo;                   //conta poupaça - cp ou conta corrente cc
        this.saldo = saldo; 
        this.status = status;               //true e false
    }
    abrirConta(){ 
        if (this.tipo == 'cc') { return this.saldo = 50} else { return this.saldo = 150 }
    } 
    fecharConta(){
        if (this.saldo <= 0) { return this.status = false} else { return`Você possui saldo ou débitos, regularize sua conta antes de fecha-la`} //melhorar
    }
    sacar(){
        if (this.status == true && this.saldo > 0) { return `Qual valor deseja sacar?`} else { return `Você não possui uma conta aberta`}
    }
    depositar(){
        if (this.status == true) { return `Qual valor deseja sacar?`} else { return `Você não possui uma conta aberta`}
    }
    pagarMensal() {
        if(this.tipo == "cc"){ return this.saldo = saldo - 12} else { return this.saldo = saldo - 20}
    }

    get userET(){
        return this.user
    }
    set userET(u){
        return this.user = u
    }

    get numeroContaET(){
        return this.numeroConta
    }
    set numeroContaET(nC){
        return this.numeroConta = nC + 1
    }

    get tipoET(){
        return this.tipo
    }
    set tipoET(t){
        if( t == 'cc'){ return `Sua conta é do uma conta corrente.` }else{ return `Sua conta é do uma conta poupança.`} 
    }

    get saldoET(){
        return this.saldo
    }
    set saldoET(s){
        return this.saldo = s + 1
    }

    get statusET(){
        return this.status
    }
    set statusET(s){
        if( s == 'true'){ return `Sua conta está aberta!`}else{ return `Sua conta está fechada!` }
    }
}

let primeiroUSer = new ContaBancaria('Telmi', 123456, 'cc')
console.log(primeiroUSer)
console.log(ContaBancaria.primerouserET, ContaBancaria.userET, ContaBancaria.numeroContaET, ContaBancaria.numeroContaET, ContaBancaria.tipoET, ContaBancaria.tipoET)

