function calcularIMC(altura, peso) {
    let imc = peso / (altura * altura);
    return imc;
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc < 24.9) {
        return "Peso normal";
    } else if (imc < 29.9) {
        return "Sobrepeso";
    } else {
        return "Obesidade";
    }
}

function exibirResultado() {
    let altura = Number(prompt("Digite a sua altura em metros:"));
    let peso = Number(prompt("Digite o seu peso em quilogramas:"));
    if (altura && peso) {
        let imc = calcularIMC(altura, peso);
        alert("Seu IMC é: " + imc);
        alert("Classificação: " + classificarIMC(imc));
    }
}

exibirResultado();
