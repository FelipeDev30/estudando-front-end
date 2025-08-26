/* 

O que são objetos em JavaScript?

Os objetos em JavaScript são coleções de propriedades, onde cada propriedade é uma associação entre uma chave (ou nome) e um valor. Os valores podem ser de qualquer tipo, incluindo outros objetos, funções e arrays. Os objetos são fundamentais para a programação em JavaScript, pois permitem a modelagem de entidades do mundo real e a organização de dados de forma estruturada.

*/

let objetos = {
    carro: {
        marca: "Fusca",
        ano: 1970,
        cor: "azul"
    },
    pessoa: {
        nome: "João",
        idade: 30,
        profissao: "desenvolvedor"
    }
};

console.log(`O carro comprado é um ${objetos.carro.marca} de ${objetos.carro.ano} e a pessoa que comprou se chama ${objetos.pessoa.nome}.`);