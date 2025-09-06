/* 
# Manipulando CSS utilizando Classes

Para manipular o CSS de elementos HTML utilizando JavaScript, você pode usar a propriedade `style` de cada elemento. A propriedade `style` permite acessar e modificar os estilos CSS diretamente no elemento.

*/
let elementos = document.getElementsByClassName("box");
for (let i = 0; i < elementos.length; i++) {
    elementos[i].style.backgroundColor = "red";
    elementos[i].style.width = "200px";
    elementos[i].style.height = "100px";
    elementos[i].style.border = "2px solid black";
    elementos[i].style.display = "flex";
    elementos[i].style.alignItems = "center";
    elementos[i].style.justifyContent = "center";
    elementos[i].style.margin = "10px";
}