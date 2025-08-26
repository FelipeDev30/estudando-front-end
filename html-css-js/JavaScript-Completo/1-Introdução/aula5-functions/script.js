/* O que são funções? 

As funções são blocos de código que realizam uma tarefa específica e podem ser reutilizados em diferentes partes do programa. Elas ajudam a organizar o código, tornando-o mais legível e fácil de manter.

Em JavaScript, uma função é definida usando a palavra-chave `function`, seguida pelo nome da função e um conjunto de parênteses que podem conter parâmetros. O código da função é colocado entre chaves.

Exemplo de uma função simples:

```javascript
function saudacao(nome) {
    return `Olá, ${nome}!`;
}
```

Para chamar a função, basta usar seu nome seguido de parênteses:

```javascript
console.log(saudacao("Maria")); // Saída: Olá, Maria!
```
*/

function mediaNotas(n1, n2, n3, media) {
    n1 = Number(prompt("Digite a primeira nota:"));
    n2 = Number(prompt("Digite a segunda nota:"));
    n3 = Number(prompt("Digite a terceira nota:"));
    media = (n1 + n2 + n3) / 3;
    return media;
}

function exibirResultado() {
    let resultado = mediaNotas();
    if (resultado >= 7) {
        alert(`O aluno está Aprovado com a média ${resultado}`);
    } else if (resultado >= 5) {
        alert(`O aluno está em Recuperação com a média ${resultado}`);
    } else {
        alert(`O aluno está Reprovado com a média ${resultado}`);
    }
}

exibirResultado();
