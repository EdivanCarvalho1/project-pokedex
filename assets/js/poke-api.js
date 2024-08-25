const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail){
    const pokemon = new Pokemon()
    pokemon.name = pokeDetail.name
    pokemon.num = pokeDetail.id
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
    const [type1] = types;
    pokemon.types = types;
    pokemon.type = type1;
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;

    return pokemon
}
pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}
pokeApi.getPokemons = (offset = 0, limit = 101) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
    .then((details) => Promise.all(details))
    .then((pokemonDetails) => pokemonDetails)
    .catch((error) => {return error})
}
