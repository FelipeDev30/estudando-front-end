
/*
setTimeout(function(){
    var request = new XMLHttpRequest();
request.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);

request.onload = function(){
    if(this.status >= 200 && this.status < 400){
        //request foi feita com sucesso!
        var data = JSON.parse(this.response);
        console.log(data);
    }else{
        //erro.

    }
}

request.onerror = function(){

}

request.send();
},2000)

*/
/*
fetch('https://jsonplaceholder.typicode.com/posts',{
    method:'POST',
    body: JSON.stringify({
        title:'Danki Code',
        body: 'Meu conteúdo',
        userId: 10
    }),
    headers:{
        'Content-Type': 'application/json; charset=UTF-8'
    }
})
.then(response=> response.json())
.then(json=>console.log(json));
*/

/* fetch('https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&language=en-US&page=1', {
    method: 'GET'
})
    .then(response => response.json())
    .then(function (json) {
        var container = document.querySelector('.container');

        // console.log(json);
        json.results.map(function (val) {
            container.innerHTML += `
                
                <div style="cursor:pointer;" class="tituloFilme">`+ val.title + `
                    <div style="display:none;" class="description">`+ val.overview + `</div>
                    <img src="https://image.tmdb.org/t/p/w500`+ val.poster_path + `" width="200px"/>
                    Nota: `+ val.vote_average + `
                    Lançamento: `+ val.release_date + `
                    <hr>
                
                </div>`;
        })

        var titulos = document.querySelectorAll('.tituloFilme');
        for (var i = 0; i < titulos.length; i++) {
            titulos[i].addEventListener('click', function (t) {
                if (t.target.querySelector('.description').style.display == "none") {
                    t.target.querySelector('.description').style.display = "block";
                } else {
                    t.target.querySelector('.description').style.display = "none";
                }
            })
        }


    })
 */

async function carregarFilmes() {
    try {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&language=pt-BR&page=1');
        const data = await response.json();
        exibirFilmes(data.results);
    } catch (error) {
        console.error('Erro ao carregar filmes:', error);
    }
}

function exibirFilmes(filmes) {
    const container = document.querySelector('.container');
    filmes.forEach(filme => {
        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${filme.poster_path}" alt="${filme.title}" />
            <h2 class="title">${filme.title}</h2>
            <p>Nota: ${filme.vote_average}</p>
            <div class="description" style="display:none">${filme.overview}</div>
            <a href="detalhes.html?id=${filme.id}">Ver detalhes</a>
            <a href="index.html">Voltar</a>
            <a href="favoritos.html">Ver favoritos</a>
            <hr />
        `;
        container.appendChild(card);
    });

    adicionarEventos();
}

function adicionarEventos() {
    const titles = document.querySelectorAll('.title');
    const descriptions = document.querySelectorAll('.description');

    titles.forEach((title, index) => {
        title.addEventListener('click', () => {
            const desc = descriptions[index];
            desc.style.display = desc.style.display === 'none' ? 'block' : 'none';
        });
    });
}

carregarFilmes();