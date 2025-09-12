const elementos = document.querySelectorAll('.player-options div > img');
let playerOpt = "";
let enemyOpt = "";

// Declarar enemyOptions no escopo global
const enemyOptions = document.querySelectorAll('.enemy-options div > img');

function resetEnemy() {
    enemyOptions.forEach(img => {
        img.style.opacity = 0.3;
    });
}

function inimigoJogar() {
    const rand = Math.floor(Math.random() * enemyOptions.length);
    resetEnemy();

    enemyOptions[rand].style.opacity = 1;
    enemyOpt = enemyOptions[rand].getAttribute('opt');

    alert(`Player: ${playerOpt} | Inimigo: ${enemyOpt}`);
}

function resetOpacityPlayer() {
    elementos.forEach(img => {
        img.style.opacity = 0.3;
    });
}

elementos.forEach(img => {
    img.addEventListener('click', (e) => {
        resetOpacityPlayer();
        e.target.style.opacity = 1;
        playerOpt = e.target.getAttribute('opt');

        inimigoJogar();
    });
});
