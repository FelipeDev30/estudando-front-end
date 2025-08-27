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

function criarPessoa() {
    return new Pessoa(prompt("Digite o nome: "), Number(prompt("Digite a idade: ")), prompt("Digite a profissão: "));
}

function exibirInformacoes(pessoa) {
    alert(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Profissão: ${pessoa.profissao}`);
}

let pessoas = [];
pessoas.push(criarPessoa());
pessoas.push(criarPessoa());

exibirInformacoes(pessoas[0]);
exibirInformacoes(pessoas[1]);