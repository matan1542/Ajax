let gPokemons = loadPokemons();
let gSideIdx = 0;
function onInit() {
    getPokemons()
    setInterval(() => {
        renderPokemons(gPokemons)
    }, 1000)
}


function renderPokemons(pokemons) {
    const sides = ['front_default', 'back_default','front_shiny', 'back_shiny' ]
    const side = sides[gSideIdx++]
    if (gSideIdx === 4) gSideIdx = 0
    const pokemonsList = (gPokemons) ? gPokemons : pokemons;
    const elPokemonConatiner = document.querySelector('.pokemon-container');
    let strHtml = pokemonsList.map((pokemon) => {
        return ` <div class="pokemon flex">
    <h2>${pokemon.name}</h2>
    <h3>${pokemon.weight}</h3>
    <img src="${pokemon.sprites[side]}">
</div>`
    })
    elPokemonConatiner.innerHTML = strHtml;
}
