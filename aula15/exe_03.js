//Cria uma página web que aceita um número e verifica se ele é um número primo e exibe um alert na tela com a mensagem: O número é primo ou O número não é primo.

function verificar() {
    let txtn = document.querySelector('input#numero')
    let res = document.querySelector('div#resposta')
    let n = Number(txtn.value)
    total = 0
    for (let i = 1; i <= n; i++) {
        let dividir = n % i
        if (dividir == 0) {
            total +=1
        }
    }
    
    if (total == 2) {
        res.innerHTML = `Esse número é PRIMO.`
    } else {
        res.innerHTML = `Esse número não é PRIMO.`
    }
}