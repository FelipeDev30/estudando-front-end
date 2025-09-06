/* 

# Orientação a Objetos em JavaScript Classes
As classes em JavaScript são uma forma de criar objetos e definir suas propriedades e métodos de maneira mais estruturada. Elas foram introduzidas no ECMAScript 6 (ES6) e fornecem uma sintaxe mais clara e concisa para a criação de objetos em comparação com as funções construtoras tradicionais.

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