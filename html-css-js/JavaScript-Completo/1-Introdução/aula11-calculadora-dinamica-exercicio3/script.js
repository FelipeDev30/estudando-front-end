form = document.forms["formulario"];
form.addEventListener("submit", function(event) {
    event.preventDefault();
    calcular();
});

function calcular() {
    let campo1 = Number(form.campo1.value);
    let campo2 = Number(form.campo2.value);
    let operacao = form.operacao.value;
    let resultado;

    if (isNaN(campo1) || isNaN(campo2)) {
        alert("Por favor, digite números válidos.");
        return;
    }

    switch (operacao) {
        case "somar":
            resultado = campo1 + campo2;
            break;
        case "subtrair":
            resultado = campo1 - campo2;
            break;
        case "multiplicar":
            resultado = campo1 * campo2;
            break;
        case "dividir":
            if (campo2 === 0) {
                alert("Divisão por zero não é permitida.");
                return;
            }
            resultado = campo1 / campo2;
            break;
        case "exponenciar":
            resultado = campo1 ** campo2;
            break;
        case "raiz":
            resultado = campo1 ** (1 / campo2);
            break;
        case "porcentagem":
            resultado = (campo1 * campo2) / 100;
            break;
        case "modulo":
            resultado = campo1 % campo2;
            break;
        default:
            alert("Operação inválida.");
            return;
    }

    form.resultado.value = resultado;
}
