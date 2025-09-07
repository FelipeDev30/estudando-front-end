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