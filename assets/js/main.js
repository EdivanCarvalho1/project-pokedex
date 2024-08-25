const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMore')
const limit = 5
let offset = 0;

const maxRecords = 151;

function loadPokemonItems(offset, limit) {
    return pokeApi.getPokemons(offset, limit).then((pokemons) => {
        const newHtml = pokemons.map((pokemon) =>
            `
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.num}</span>
                <span class="name">${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</span>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
            </li>
            `
        ).join('');
    
        pokemonList.innerHTML += newHtml;

        setTimeout(() => {
            const pokemons = document.querySelectorAll('.pokemon:not(.show)');
            pokemons.forEach(pokemon => pokemon.classList.add('show'));
        }, 10);
    });
}

loadPokemonItems(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItems(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItems(offset, limit)
    }
})