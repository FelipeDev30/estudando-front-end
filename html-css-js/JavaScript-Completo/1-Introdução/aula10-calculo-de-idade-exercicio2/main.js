form = document.getElementById('form');
resultado = document.getElementById('resultado');

form.addEventListener(`submit`, function(event) {
    event.preventDefault();
    const anoNascimento = Number(document.getElementById(`anoNascimento`).value)
    const idade = calcularIdade(anoNascimento)
    mostrarResultado(idade);
})

function calcularIdade(anoNascimento){
    const anoAtual = new Date().getFullYear();
    return anoAtual - anoNascimento;
}

function mostrarResultado(idade) {
    resultado.innerHTML = `Você tem ${idade} anos.`;
}

