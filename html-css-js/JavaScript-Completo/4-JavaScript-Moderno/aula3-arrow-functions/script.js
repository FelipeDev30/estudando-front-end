const calularIdade = (ano) => {
    ano = Number(prompt('Digite o ano de nascimento:'));
    idade = 2025 - ano;
    return alert(`Sua idade em 2025 será: ${idade} anos.`);
}

calularIdade();