/* 

O que são laços de repetição?

Os laços de repetição são estruturas de controle que permitem executar um bloco de código várias vezes, enquanto uma condição for verdadeira. Em JavaScript, existem diferentes tipos de laços, como o `for`, `while` e `do...while`.

exemplos:

1. Laço `for`:
```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

2. Laço `while`:
```javascript
let n = 0;
while (n < 5) {
    console.log(n);
    n++;
}
```

3. Laço `do...while`:
```javascript
let m = 0;
do {
    console.log(m);
    m++;
} while (m < 5);
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

let alunos = ["Felipe", "Kethleen", "Gabriela", "Rodolfo", "Yanca"];
for (let i = 0; i < alunos.length; i++) {
    alert(`Calculando a média do aluno: ${alunos[i]}`);
    exibirResultado();
}



