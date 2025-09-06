/* 

# O que são Template Strings?

Template Strings são uma forma mais moderna e conveniente de trabalhar com strings em JavaScript. Elas permitem a interpolação de variáveis e expressões diretamente dentro da string, tornando o código mais legível e fácil de manter.

*/

let nome = 'Luiz Felipe Lamas da Silva';
let idade = 31;

// Concatenando
console.log('Meu nome é ' + nome + ' e tenho ' + idade + ' anos.');

// Usando template strings
console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);