/* 

O que são condições? 

As condições são estruturas que permitem executar um bloco de código apenas se uma determinada condição for verdadeira. Em JavaScript, as condições são geralmente implementadas usando as instruções if, else if e else.

Explicando as comparações lógicas:

- O operador `>=` verifica se o valor à esquerda é maior ou igual ao valor à direita.
- O operador `>` verifica se o valor à esquerda é maior que o valor à direita.
- O operador `<=` verifica se o valor à esquerda é menor ou igual ao valor à direita.
- O operador `<` verifica se o valor à esquerda é menor que o valor à direita.
- O operador `==` verifica se dois valores são iguais (sem considerar o tipo).
- O operador `===` verifica se dois valores são iguais (considerando o tipo).
- O operador `!=` verifica se dois valores são diferentes (sem considerar o tipo).
- O operador `!==` verifica se dois valores são diferentes (considerando o tipo).

Operadores lógicos

- O operador `&&` verifica se duas condições são verdadeiras.
- O operador `||` verifica se pelo menos uma das condições é verdadeira.
- O operador `!` a negação lógica inverte o valor de uma condição.

*/

let n1 = Number(prompt("Digite a primeira nota do aluno: "));
let n2 = Number(prompt("Digite a segunda nota do aluno: "));
let n3 = Number(prompt("Digite a terceira nota do aluno: "));
let media = (n1 + n2 + n3) / 3;

if (media >= 7) {
    alert(`O aluno está Aprovado com a média ${media}`);
} else if (media >= 5) {
    alert(`O aluno está em Recuperação com a média ${media}`);
} else {
    alert(`O aluno está Reprovado com a média ${media}`);
}

