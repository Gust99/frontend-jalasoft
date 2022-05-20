console.log(JSON.parse(process.env.npm_config_argv).original[1]);

if(process.env.npm_execpath.match('yarn') 
|| JSON.parse(process.env.npm_config_argv).original[1].match('yarn')) {
    console.log('Dont use yarn');
    process.exit(1);
}
class PokemonCard extends HTMLElement {
    constructor(imgURL, name, color, data) {
        super();
  
        let shadow = this.attachShadow( { mode: 'open' } );
        let templateElem = document.getElementById('PokemonCardTemplate');
        let content = templateElem.content.cloneNode(true);
  
        let styles = document.createElement('link');
        styles.setAttribute('rel', 'stylesheet');
        styles.setAttribute('href', './style.css');
        
        shadow.appendChild(styles);

        content.querySelector('.single-container > img').setAttribute('src', imgURL);
        content.querySelector('.single-container > .name').innerText = name;
        content.querySelector('.single-container').style.backgroundColor = color;
        content.querySelector('.modal .name').innerText = name;
        content.querySelector('.modal .abilities').innerHTML = data.abilitiesHTML;
        content.querySelector('.modal .stats').innerHTML = data.statsHTML;

        //MODAL
        content.querySelector('.single-container').addEventListener('click', event => this.openModal(event));

        shadow.appendChild(content);
    }

    openModal(event) {
        event.preventDefault();
            
        const modal = event.path.find(element => element.classList[0]==='single-container').nextElementSibling;

        modal.classList.add('open');
        
        const exits = modal.querySelectorAll('.modal-exit');
        
        exits.forEach(exit => {
            exit.addEventListener('click', event => {
                event.preventDefault();
                modal.classList.remove('open');
            });
        });
    }
}

customElements.define('pokemon-card', PokemonCard);
import { pokemonColorMap, dataPokemons, getPokemonImageUri } from './utils.js';

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
const pokemonColorMap = {
  "1": "#4ca04c",//green
  "2": "#4ca04c",
  "3": "#4ca04c",
  "4": "#de3a3a", //red
  "5": "#de3a3a",
  "6": "#de3a3a",
  "7": "#3e3ec0",//blue
  "8": "#3e3ec0",
  "9": "#3e3ec0",
  "10": "#4ca04c",
  "11": "#4ca04c",
  "12": "#fbf6f6",//blanco
  "13": "#7c5151", //brown
  "14": "#f0f060e6",
  "15": "#f0f060e6",
  "16": "#7c5151",
  "17": "#7c5151",
  "18": "#7c5151",
  "19": "#523352",
  "20": "#7c5151",
  "21": "#7c5151",
  "22": "#7c5151",
  "23": "#523352",
  "24": "#523352",
  "25": "#f0f060e6",
  "26": "#f0f060e6",
  "27": "#f0f060e6",
  "28": "#f0f060e6",
  "29": "#3e3ec0",
  "30": "#3e3ec0",
  "31": "#3e3ec0",
  "32": "#523352",
  "33": "#523352",
  "34": "#523352",
  "35": "#ffb6c3",
  "36": "#ffb6c3",
  "37": "#7c5151",
  "38": "#f0f060e6",
  "39": "#ffb6c3",
  "40": "#ffb6c3",
  "41": "#523352",
  "42": "#523352",
  "43": "#3e3ec0",
  "44": "#3e3ec0",
  "45": "#de3a3a",
  "46": "#de3a3a",
  "47": "#de3a3a",
  "48": "#523352",
  "49": "#523352",
  "50": "#7c5151",
  "51": "#7c5151",
  "52": "#f0f060e6",
  "53": "#f0f060e6",
  "54": "#f0f060e6",
  "55": "#3e3ec0",
  "56": "#7c5151",
  "57": "#7c5151",
  "58": "#7c5151",
  "59": "#7c5151",
  "60": "#3e3ec0",
  "61": "#3e3ec0",
  "62": "#3e3ec0",
  "63": "#7c5151",
  "64": "#7c5151",
  "65": "#7c5151",
  "66": "gray",
  "67": "gray",
  "68": "gray",
  "69": "#4ca04c",
  "70": "#4ca04c",
  "71": "#4ca04c",
  "72": "#3e3ec0",
  "73": "#3e3ec0",
  "74": "#7c5151",
  "75": "#7c5151",
  "76": "#7c5151",
  "77": "#f0f060e6",//yellow
  "78": "#f0f060e6",
  "79": "#ffb6c3", //#pink
  "80": "#ffb6c3",
  "81": "gray",
  "82": "gray",
  "83": "#7c5151",
  "84": "#7c5151",
  "85": "#7c5151",
  "86": "#fbf6f6",
  "87": "#fbf6f6",
  "88": "#523352",
  "89": "#523352",
  "90": "#523352",
  "91": "#523352",
  "92": "#523352",
  "93": "#523352",
  "94": "#523352",
  "95": "gray",
  "96": "#f0f060e6",
  "97": "#f0f060e6",
  "98": "#de3a3a",
  "99": "#de3a3a",
  "100": "#de3a3a",
  "101": "#de3a3a",
  "102": "#ffb6c3",
  "103": "#f0f060e6",
  "104": "#7c5151",
  "105": "#7c5151",
  "106": "#7c5151",
  "107": "#7c5151",
  "108": "#ffb6c3",
  "109": "#523352",
  "110": "#523352",
  "111": "gray",
  "112": "gray",
  "113": "#ffb6c3",
  "114": "#3e3ec0",
  "115": "#7c5151",
  "116": "#3e3ec0",
  "117": "#3e3ec0",
  "118": "#de3a3a",
  "119": "#de3a3a",
  "120": "#7c5151",
  "121": "#523352",
  "122": "#ffb6c3",
  "123": "#4ca04c",
  "124": "#de3a3a",
  "125": "#f0f060e6",
  "126": "#de3a3a",
  "127": "#7c5151",
  "128": "#7c5151",
  "129": "#de3a3a",
  "130": "#3e3ec0",
  "131": "#3e3ec0",
  "132": "#523352",
  "133": "#7c5151",
  "134": "#3e3ec0",
  "135": "#f0f060e6",
  "136": "#de3a3a",
  "137": "#ffb6c3",
  "138": "#3e3ec0",
  "139": "#3e3ec0",
  "140": "#7c5151",
  "141": "#7c5151",
  "142": "#523352",
  "143": "black",
  "144": "#3e3ec0",
  "145": "#f0f060e6",
  "146": "#f0f060e6",
  "147": "#3e3ec0",
  "148": "#3e3ec0",
  "149": "#7c5151",
  "150": "#523352",
  "151": "#ffb6c3",
}

const dataPokemons = {
  "count": 1118,
  "next": "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20",
  "previous": null,
  "results": [
    {
      "name": "bulbasaur",
      "url": "https://pokeapi.co/api/v2/pokemon/1/"
    },
    {
      "name": "ivysaur",
      "url": "https://pokeapi.co/api/v2/pokemon/2/"
    },
    {
      "name": "venusaur",
      "url": "https://pokeapi.co/api/v2/pokemon/3/"
    },
    {
      "name": "charmander",
      "url": "https://pokeapi.co/api/v2/pokemon/4/"
    },
    {
      "name": "charmeleon",
      "url": "https://pokeapi.co/api/v2/pokemon/5/"
    },
    {
      "name": "charizard",
      "url": "https://pokeapi.co/api/v2/pokemon/6/"
    },
    {
      "name": "squirtle",
      "url": "https://pokeapi.co/api/v2/pokemon/7/"
    },
    {
      "name": "wartortle",
      "url": "https://pokeapi.co/api/v2/pokemon/8/"
    },
    {
      "name": "blastoise",
      "url": "https://pokeapi.co/api/v2/pokemon/9/"
    },
    {
      "name": "caterpie",
      "url": "https://pokeapi.co/api/v2/pokemon/10/"
    },
    {
      "name": "metapod",
      "url": "https://pokeapi.co/api/v2/pokemon/11/"
    },
    {
      "name": "butterfree",
      "url": "https://pokeapi.co/api/v2/pokemon/12/"
    },
    {
      "name": "weedle",
      "url": "https://pokeapi.co/api/v2/pokemon/13/"
    },
    {
      "name": "kakuna",
      "url": "https://pokeapi.co/api/v2/pokemon/14/"
    },
    {
      "name": "beedrill",
      "url": "https://pokeapi.co/api/v2/pokemon/15/"
    },
    {
      "name": "pidgey",
      "url": "https://pokeapi.co/api/v2/pokemon/16/"
    },
    {
      "name": "pidgeotto",
      "url": "https://pokeapi.co/api/v2/pokemon/17/"
    },
    {
      "name": "pidgeot",
      "url": "https://pokeapi.co/api/v2/pokemon/18/"
    },
    {
      "name": "rattata",
      "url": "https://pokeapi.co/api/v2/pokemon/19/"
    },
    {
      "name": "raticate",
      "url": "https://pokeapi.co/api/v2/pokemon/20/"
    },
    {
      "name":"spearow",
      "url":"https://pokeapi.co/api/v2/pokemon/21/"
    },
    {
      "name":"fearow",
      "url":"https://pokeapi.co/api/v2/pokemon/22/"
    },
    {
      "name":"ekans",
      "url":"https://pokeapi.co/api/v2/pokemon/23/"
    },
    {
      "name":"arbok",
      "url":"https://pokeapi.co/api/v2/pokemon/24/"
    },
    {
      "name":"pikachu",
      "url":"https://pokeapi.co/api/v2/pokemon/25/"
    }
  ]
};

function getPokemonImageUri (id) {
  const imageId = ('00' + id).slice(-3); // para 1 => 001
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imageId}.png`;
}

export { pokemonColorMap, dataPokemons, getPokemonImageUri };