/* 
# O que é DOM?

O DOM (Document Object Model) é uma interface de programação que permite a manipulação de documentos HTML e XML. Ele representa a estrutura do documento como uma árvore de nós, onde cada nó é um objeto que pode ser manipulado com JavaScript. Com o DOM, é possível acessar e modificar o conteúdo, a estrutura e o estilo de uma página da web de forma dinâmica.

*/
let p = document.querySelector("p");
let botao = document.querySelector("#meuBotao");

botao.addEventListener("click", function() {
    p.textContent = "Você clicou no botão!";
});
