/* 

# Cálculo de Idade com Formulário

Este script calcula a idade de uma pessoa com base no ano de nascimento fornecido através de um formulário. O resultado é exibido na página.

*/
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

