const arr = ['Guilherme', 'Miranda', 30 , 'Rio de Janeiro'];

const [nome, sobrenome, idade, cidade] = arr;
alert(`Nome: ${nome}, Sobrenome: ${sobrenome}, Idade: ${idade}, Cidade: ${cidade}`);

const frutas = ['Banana', 'Maçã', 'Pera', 'Uva'];
const [fruta1, fruta2, ...outras] = frutas;
alert(`Fruta 1: ${fruta1}, Fruta 2: ${fruta2}`);
alert(`Outras frutas: ${outras.join(', ')}`);