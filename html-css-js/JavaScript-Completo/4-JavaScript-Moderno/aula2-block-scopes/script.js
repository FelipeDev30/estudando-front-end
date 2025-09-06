/* 

# O que é block scope?

Block scope é o escopo definido por chaves `{}`. Variáveis declaradas com `let` ou `const` dentro de um bloco não são acessíveis fora dele.

*/

{
    // Vai ficar definido apenas dentro deste bloco
    let nome = 'Luiz';
    console.log(nome);
}

/* console.log(nome); // Erro, nome is not defined */

for (let i = 0; i < 10; i++) {
    console.log(i);
}