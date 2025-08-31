let p = document.querySelector("p");
let botao = document.querySelector("#meuBotao");

botao.addEventListener("click", function() {
    p.textContent = "Você clicou no botão!";
});
