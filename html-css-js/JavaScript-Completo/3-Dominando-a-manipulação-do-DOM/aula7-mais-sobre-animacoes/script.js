/* 

# Mais sobre animações

As animações em JavaScript podem ser criadas manipulando as propriedades CSS dos elementos. Além disso, você pode usar a função `requestAnimationFrame` para criar animações mais suaves e eficientes.

*/

const spans = document.querySelectorAll(".conteudo span");

spans.forEach(span => {
    span.addEventListener("click", () => {
        const conteudo = span.closest(".conteudo").querySelector("p");

        if (conteudo.classList.contains("mostrar")) {
            span.innerHTML = "Ver mais!";
            conteudo.classList.remove("mostrar");
        } else {
            span.innerHTML = "Ocultar!";
            conteudo.classList.add("mostrar");
        }
    });
});