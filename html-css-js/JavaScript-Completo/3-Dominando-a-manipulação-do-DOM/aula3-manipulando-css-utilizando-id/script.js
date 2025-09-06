/* 

# Manipulando CSS utilizando ID

Para manipular o CSS de um elemento HTML utilizando JavaScript, você pode usar a propriedade `style` do elemento. A propriedade `style` permite acessar e modificar os estilos CSS diretamente no elemento.

*/
let el = document.getElementById("box");
el.style.backgroundColor = "red";
el.style.width = "200px";
el.style.height = "100px";
el.style.border = "2px solid black";
el.style.display = "flex";
el.style.alignItems = "center";
el.style.justifyContent = "center";