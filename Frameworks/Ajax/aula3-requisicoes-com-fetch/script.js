/* 

# O que é requisição com Fetch?

Fetch é uma API nativa do JavaScript que permite fazer requisições HTTP de forma simples e eficiente. Ela é baseada em Promises, o que facilita o tratamento de respostas assíncronas.

*/
setTimeout(()=>{
    document.body.style.backgroundColor = 'lightblue'
    document.getElementById('msg').innerText = 'Requisição POST executada com Fetch API'
    console.log('Executando setTimeout')
    alert('Executando setTimeout')
    // Requisição POST
        fetch('https://jsonplaceholder.typicode.com/posts/', {
            method: 'POST',
            body: JSON.stringify({
                title: 'InfoLipe',
                body:'Curso de JavaScript',
                userId: 1
            }),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        })
        .then(response=> response.json())
        .then(json=> console.log(json))
        .catch(err=> console.log('Erro: ' + err));
}, 2000)


// Verifica se a resposta foi bem-sucedida