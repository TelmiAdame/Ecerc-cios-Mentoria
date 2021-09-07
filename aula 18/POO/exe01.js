

/*
Projeto Zoológico

Crie uma classe que representa um animal. O animal deve ter olhos,
especie, quantidade de patas, saber o que ele come.
Após isso crie as classes Cachorro, Pato e Girafa que estendem a classe
Animal.

*/

class animal{
    especie;
    olhos;
    patas;
    alimentacao;
    constructor(especie, olhos, patas, alimentacao,){
        this.especie = especie;
        this.olhos = olhos;
        this.patas = patas;
        this.alimentacao = alimentacao;
    }
}

class cachorro{
    orelhas;
    fucinho;
    rabo;
    constructor(orelhas, fucinho, rabo) {
        super(especie, olhos, patas, alimentacao);
        this.orelhas = orelhas;
        this.fucinho = fucinho;
        this.rabo = rabo;
    } 
}

class pato{
    bico;
    asa;
    constructor(bico, asa) {
        super(especie, olhos, patas, alimentacao);
        this.bico = bico;
        this.asa = asa;
    }
}

class girafa{
    chifre;
    pinta;
    casco;
    constructor(chifre, pinta, casco) {
        super(especie, olhos, patas, alimentacao);
        this.chifre = chifre;
        this.pinta = pinta;
        this.casco = casco; 
    }
}

let viraLata = new cachorro(2, 'fino', 'true', 'cachorro', 'castanhos', 4, 'ração')
console.log(cachorro)


