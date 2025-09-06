/*

# Trabalhando com Datas em JavaScript
Em JavaScript, a manipulação de datas é feita através do objeto `Date`. Ele permite criar, formatar e realizar operações com datas e horários. Você pode obter a data e hora atual, extrair partes específicas da data (como dia, mês, ano, horas, minutos, segundos), e também realizar cálculos com datas.

*/
let date = new Date();
console.log(date.getHours(), ":", date.getMinutes(), ":", date.getSeconds());

let data = new Date('08/30/2025');
console.log(data.getDate())

let date2 = new Date('08/25/2025');
console.log(date2.getDate());

let diferenca = data.getTime() - date2.getTime();
console.log(diferenca / (1000 * 3600 * 24)); // diferença em dias