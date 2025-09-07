/* 

# O que é Rest

O Rest é uma funcionalidade do JavaScript que permite agrupar um número indefinido de argumentos em um array. Ele é representado por três pontos (...) antes do nome do parâmetro na definição de uma função.

*/

function testes(...nomes){
    console.log(nomes);
}

testes({nome: 'Luiz', sobrenome: 'Silva', cidade: 'São Paulo'}, {nome: 'Maria', sobrenome: 'Oliveira', cidade: 'Rio de Janeiro'}, {nome: 'João', sobrenome: 'Pereira', cidade: 'Belo Horizonte'});

