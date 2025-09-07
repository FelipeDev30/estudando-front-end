/* 

# O que é Spread?

O operador spread (...) é usado para expandir elementos de um array ou propriedades de um objeto em locais onde múltiplos elementos ou propriedades são esperados. Ele "espalha" os elementos do array ou as propriedades do objeto.

*/

var nomes = [
    {
        nome: 'João',
        idade: 25
    },
    {
        nome: 'Maria',
        idade: 30
    },
    {
        nome: 'Pedro',
        idade: 35
    }
]

const objetos = [
    ...nomes,
];

console.log(...objetos);
console.log(objetos);
console.log(nomes);

const novoObjeto = {
    ...nomes[0],
    cidade: 'São Paulo'
};
console.log(novoObjeto);