
/*

Com a promise do Exercício anterior, trate a execução do resultado da Promise.

● Se a promise tiver resultado, exibe no console:
"Promise executada com sucesso"

● Se a promise não for executada, exibe no
console: "Houve um erro com a sua solicitação".

*/


async function endereco(){
    let enderecoPessoa = 'Vitoria'
    let buscarEndereço = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(enderecoPessoa == 'Vitoria') {
                resolve ('Endereço encontrado')
            }else{
                reject ('Erro ao buscar endereço')
            }}), 2000
    })

    let resultado = await buscarEndereço
    console.log(resultado)
}

endereco()