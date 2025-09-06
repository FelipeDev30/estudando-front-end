/* 

# Introdução ao forEach em JavaScript

O método `forEach` é uma função de array em JavaScript que permite iterar sobre os elementos de um array e executar uma função para cada elemento. Ele é uma maneira conveniente e legível de percorrer arrays sem a necessidade de usar loops tradicionais, como `for` ou `while`.

*/
let frutas = ['maçã', 'banana', 'laranja', 'manga'];

frutas.forEach(function(value, index){
    console.log(index + ': ' + value);
});



