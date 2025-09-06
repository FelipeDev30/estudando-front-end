/* 
# Animações com JavaScript

Para criar animações com JavaScript, você pode utilizar a propriedade `transition` do CSS em conjunto com a manipulação de classes. A propriedade `transition` permite definir a duração e o tipo de transição para as propriedades CSS que serão animadas.

*/
let animeEsquerda = document.querySelectorAll('.box')[0];
/* setTimeout(() => {
    animeEsquerda.classList.add('animeEsquerda');
}, 1000); */

animeEsquerda.addEventListener('click', () => {
    animeEsquerda.classList.add('animeEsquerda');
});

animeEsquerda.addEventListener('transitionend', () => {
    animeEsquerda.classList.remove('animeEsquerda');
});
