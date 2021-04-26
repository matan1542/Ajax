let gCount = 1;
let limit = 10;
const KEY = 'pokemons';
let gPokemonsList = loadFromStorage(KEY) || [];
function getPokemons() {
    if (gPokemonsList.length) {
        console.log('enterPokemon')
        getPokemonsListFromStorage();
        return
    }
    $.get(` https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=1`, getPokemon)
}


function loadPokemons(){
    return gPokemonsList;
}

function getPokemon(pokemons) {
    pokemons.results.forEach((pokemon) => {
        $.get(`${pokemon.url}`, getPokemonsList);
    })
}
function getPokemonsListFromStorage() {
    if (gCount)
        renderPokemons(gPokemonsList);
}

function getPokemonsList(pokemon) {
    gPokemonsList.push(pokemon);
    gCount++;
    if (gCount === limit) {
        saveToStorage(KEY, gPokemonsList);
        renderPokemons(gPokemonsList);
        gCount = 0;
    }
}