/* 

# Criando um slider - Exercício
Para criar um slider simples utilizando JavaScript, você pode seguir os seguintes passos:

1. Estrutura HTML: Crie a estrutura básica do slider com uma div para conter as imagens e outra para os bullets (indicadores).
2. Estilos CSS: Adicione estilos para posicionar as imagens e bullets corretamente. Use `position: absolute` para sobrepor as imagens e `opacity` para controlar a visibilidade.
3. JavaScript: Use JavaScript para adicionar funcionalidade ao slider. Adicione um evento de clique aos bullets para trocar as imagens e atualizar a classe ativa do bullet.

*/

var lastIndex = 0;
var images = document.querySelectorAll('.container img');

images.forEach((item, index) => {
    document.querySelectorAll('.bullet-single')[index].addEventListener('click', ()=>{
        let lastImage = document.querySelectorAll('.container img')[lastIndex];
        let actualImage = document.querySelectorAll('.container img')[index];

        //Troca de imagens
        lastImage.style.opacity = 0;
        actualImage.style.opacity = 1;

        //Reset das bullets
        document.querySelectorAll('.bullet-single')[lastIndex].classList.remove('active-bullet');
        document.querySelectorAll('.bullet-single')[index].classList.add('active-bullet');
        lastIndex = index;

    })
});