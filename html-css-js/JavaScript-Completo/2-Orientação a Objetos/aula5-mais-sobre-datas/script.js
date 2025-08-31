let data = new Date('08/30/2025');
console.log(data.getDate())

let date2 = new Date('08/25/2025');
console.log(date2.getDate());

let diferenca = data.getTime() - date2.getTime();
console.log(diferenca / (1000 * 3600 * 24)); // diferença em dias