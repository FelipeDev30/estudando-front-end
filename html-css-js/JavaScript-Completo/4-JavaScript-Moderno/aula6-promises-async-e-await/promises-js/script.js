/* 

# O que são Promises?

As Promises são objetos que representam a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante. Elas permitem que você escreva código assíncrono de forma mais legível e fácil de entender.

*/

function testes() {
    return new Promise((resolve, reject) => {
        const erro = false;
        if(erro){
            reject('Ocorreu um erro na Promise!');
        } else {
            resolve('Promise resolvida com sucesso!');
        }
    });
}


testes().then((resolucao) => {
    console.log(resolucao);
}).catch((erro) => {
    console.log(erro);
});
