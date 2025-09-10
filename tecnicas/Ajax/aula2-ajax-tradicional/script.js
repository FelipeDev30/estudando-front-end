/* 

# O que é o Ajax Tradicional?

Ajax (Asynchronous JavaScript and XML) é uma técnica que permite a atualização de partes de uma página web sem a necessidade de recarregar a página inteira. O Ajax tradicional utiliza o objeto XMLHttpRequest para enviar e receber dados de um servidor.

*/
setTimeout(function() {
    document.getElementById('msg').textContent = 'Conteúdo atualizado via Ajax Tradicional!';
    alert('Conteúdo atualizado!');
    var request = new XMLHttpRequest();
    var url = 'https://jsonplaceholder.typicode.com/todos/1';
    request.open('GET', url, true);
    
    request.onload = function () {
        if (this.status >= 200 && this.status < 400) {
            var data = JSON.parse(this.responseText);
            console.log(data);
        } else {
            console.error('Erro na resposta do servidor');
        }
    
        request.onerror = function () {
            console.error('Erro na requisição');
        };
    };
    request.send();
}, 2000);

// Exemplo de requisição Ajax tradicional
