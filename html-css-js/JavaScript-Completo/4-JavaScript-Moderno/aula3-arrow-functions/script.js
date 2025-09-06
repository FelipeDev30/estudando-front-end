    const calcularIdade = (ano) => {
    nome = prompt('Digite seu nome:');
    ano = Number(prompt('Digite o ano de nascimento:'));
    idade = 2025 - ano;
    return alert(`Meu nome é ${nome} e tenho ${idade} anos de idade.`);
}

calcularIdade();

const teste = (texto, par) =>{
    par(texto);
}

teste('Olá mundo!', (texto) => {
    alert(texto);
});