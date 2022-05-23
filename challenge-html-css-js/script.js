// import { pokemonColorMap, dataPokemons, getPokemonImageUri } from './utils.js';

const container = document.querySelector('.all-container');

function renderTopPokemons() {
    dataPokemons.results.forEach(createPokemonContainer);
    // fetch(dataPokemons.next)
    // .then(res => res.json())
    // .then(json => {
    //     json.results.forEach(createPokemonContainer);
    // });
}

async function createPokemonContainer(pokemon, index) {
    let pokemonData = await getPokemonData(pokemon.url);

    console.log(pokemonData);

    let abilitiesHTML = formatAbilities(pokemonData.abilities);
    let statsHTML = formatStats(pokemonData.stats);

    let pokmeonContainer = new PokemonCard(
        getPokemonImageUri(index + 1),
        pokemon.name,
        pokemonColorMap[index + 1],
        {abilitiesHTML, statsHTML}
    );

    container.appendChild(pokmeonContainer);
}

async function getPokemonData(pokemonURL) {
    return await fetch(pokemonURL)
    .then(res => res.json());
}

function formatAbilities(abilities) {
    let abilitiesHTML = "<p>Abilities</p>";

    abilitiesHTML += "<ul>";

    abilities.forEach(ability => {
        abilitiesHTML += `<li class='ability'>${ability.ability.name}</li>`;
    });

    abilitiesHTML += "</ul>";

    return abilitiesHTML;
}

function formatStats(stats) {
    let statsHTML = "<p>Stats</p>";

    statsHTML += "<ul>";

    stats.forEach(stat => {
        statsHTML += `<li class='ability'><strong>${stat.stat.name}:</strong> ${stat.base_stat}</li>`;
    });

    statsHTML += "</ul>";

    return statsHTML;
}

renderTopPokemons();