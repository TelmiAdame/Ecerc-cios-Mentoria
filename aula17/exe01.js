/*

Crie uma função assíncrona que receba um tempo em milissegundos
e retorna uma promise após esses segundos passarem.

Dica:
● Use a função setTimeout para passar o tempo

*/


async function endereco(){
    
    let buscarEndereço = new Promise((resolve, reject) => {
        setTimeout(() => resolve ('Endereço encontrado'), 2000)
    })

    let resultado = await buscarEndereço
    console.log(resultado)
}

endereco()

