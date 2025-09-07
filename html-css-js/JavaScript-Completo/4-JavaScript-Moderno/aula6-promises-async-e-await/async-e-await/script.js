/* 

# O que são Async/Await?

As palavras-chave async e await são uma forma mais moderna e legível de trabalhar com Promises em JavaScript. Elas permitem que você escreva código assíncrono de maneira síncrona, facilitando a leitura e o entendimento do fluxo de execução.

*/
function testes(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const erro = false;
            if(erro){
                reject('Erro...');
            } else {
                resolve('A promessa foi resolvida com sucesso!');
            }
        }, 2000);
    });
}

async function testes2(){
    await testes().then((res)=>{
        alert(res);
    });
    alert('Terminou!');
}

testes2();