/* 

# O que são Arrow Functions?

- São uma forma mais curta de escrever expressões de função em JavaScript.
- Introduzidas no ES6 (ECMAScript 2015).
- Sintaxe mais concisa, especialmente para funções anônimas.
- Não possuem seu próprio `this`, `arguments`, `super` ou `new.target`.

*/
const calcularIdade = (ano) => {
    const nome = prompt('Digite seu nome:');
    ano = Number(prompt('Digite o ano de nascimento:'));
    const idade = 2025 - ano;
    return alert(`Meu nome é ${nome} e tenho ${idade} anos de idade.`);
}

calcularIdade();

const teste = (texto, par) =>{
    par(texto);
}

teste('Olá mundo!', (texto) => {
    alert(texto);
});