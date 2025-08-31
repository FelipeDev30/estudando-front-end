/* 

O que são instâncias em JavaScript?

As instâncias em JavaScript são objetos criados a partir de uma função construtora ou de uma classe. Elas representam uma ocorrência específica de um objeto, com suas próprias propriedades e métodos. As instâncias permitem a criação de múltiplos objetos com a mesma estrutura, mas com valores diferentes.

*/

// ...existing code...
function criarPessoa(nome, idade, profissao) {
    return {
        nome: nome,
        idade: idade,
        profissao: profissao
    };
}

function criarPessoaPrompt() {
    const nome = prompt("Digite o nome: ");
    const idade = Number(prompt("Digite a idade: "));
    const profissao = prompt("Digite a profissão: ");
    return criarPessoa(nome, idade, profissao);
}

function exibirInformacoes(pessoa) {
    alert(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Profissão: ${pessoa.profissao}`);
}

let pessoas = [];
pessoas.push(criarPessoaPrompt());
pessoas.push(criarPessoaPrompt());

exibirInformacoes(pessoas[0]);
exibirInformacoes(pessoas[1]);
// ...existing code...
