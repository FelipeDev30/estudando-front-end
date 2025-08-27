/* 

O que são instâncias em JavaScript?

As instâncias em JavaScript são objetos criados a partir de uma função construtora ou de uma classe. Elas representam uma ocorrência específica de um objeto, com suas próprias propriedades e métodos. As instâncias permitem a criação de múltiplos objetos com a mesma estrutura, mas com valores diferentes.

*/

class Pessoa {
    constructor(nome, idade, profissao) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }
}

let pessoa1 = new Pessoa(prompt("Digite o nome: "), Number(prompt("Digite a idade: ")), prompt("Digite a profissão: "));
let pessoa2 = new Pessoa(prompt("Digite o nome: "), Number(prompt("Digite a idade: ")), prompt("Digite a profissão: "));

alert(`Nome: ${pessoa1.nome}, Idade: ${pessoa1.idade}, Profissão: ${pessoa1.profissao}`);
alert(`Nome: ${pessoa2.nome}, Idade: ${pessoa2.idade}, Profissão: ${pessoa2.profissao}`);