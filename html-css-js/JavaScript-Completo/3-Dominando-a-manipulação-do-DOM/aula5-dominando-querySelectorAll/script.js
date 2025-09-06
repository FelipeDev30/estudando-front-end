/*
# Dominando querySelectorAll

O método `querySelectorAll` do objeto `document` permite selecionar todos os elementos que correspondem a um seletor CSS específico. Ele retorna uma NodeList estática contendo todos os elementos correspondentes.

let els = document.querySelectorAll('#box .inside-testes');
els[0].style.color = "blue";
els[0].style.fontSize = "20px";
els[1].style.color = "green";
els[1].style.fontSize = "18px"; 

*/

let els = document.querySelectorAll('#box .inside-testes');
els[0].innerHTML = "Novo texto para o primeiro elemento";
els[1].innerHTML = "Novo texto para o segundo elemento";