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
