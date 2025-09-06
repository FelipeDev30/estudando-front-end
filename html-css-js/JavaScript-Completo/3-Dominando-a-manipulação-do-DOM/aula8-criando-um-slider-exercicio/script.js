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