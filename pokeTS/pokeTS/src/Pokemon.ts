import axios from "axios";
/*

Pokemon class
  - one pokemon has name, id, types and moves
  

List of goals:
  - create a function to get all information of a pokemon from result of getSinglePokemon
  - get a List of types from a pokemon, assing to a variable called types
  - get a List of moves from a pokemon, you can only choose 4 moves by pokemon, those moves should be aleatory
  - fill Moves with missing data from Types you can get the information from url of the move.
  - re-write decortator to get new pokemons Ids in PokemonTrainer class 
*/
export function getSinglePokemon(id: string | number) {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
}

export async function getPokemonData(pokemonId: string | number) {
  const response = await getSinglePokemon(pokemonId);

  const id = response.data.id;
  const name = response.data.name;
  const moves: Move[] = [];
  const types: Type[] = [];
  
  const movesPromises = response.data.moves.map(moveObject => 
    axios.get(moveObject.move.url));

  const movesPromisesResults = await Promise.all(movesPromises);

  movesPromisesResults.forEach((movePromiseResult, index) => {
    const newMove = {
      name: response.data.moves[index].move.name,
      url: response.data.moves[index].move.url,
      type: movePromiseResult.data.type.name,
      damage: movePromiseResult.data.power,
      powerPoints: movePromiseResult.data.pp,
      accuracy: movePromiseResult.data.accuracy
    } as Move;

    moves.push(newMove);
  });

  response.data.types.forEach((typeObject: { type: { name: any; url: any; }; }) => {
    const name = typeObject.type.name;
    const url = typeObject.type.url;

    types.push({ name, url });
  });

  return { id, name, moves, types };
}

function getNewPokemons<T extends { new(...args: any[]): {} }>(constructor: T) {
  const pokemonsIndex: Number[] = [];
  
  const nPokemons = Math.round(Math.random() * 5 + 1);

  for(let i = 0; i < nPokemons; i++) {
    let indexValue = Math.round(Math.random() * 100);
    
    while(pokemonsIndex.includes(indexValue)) {
      indexValue = Math.round(Math.random() * 100);
    }

    pokemonsIndex.push(indexValue);
  }

  return class extends constructor {
    listOfIds = pokemonsIndex;
  }
}

type Move = {
  name: string;
  url: string;
  type?: string;
  damage?: number; // power
  powerPoints?: number; // pp
  accuracy?: number;
};

type Type = {
  name: string;
  url: string;
};

export class Pokemon {
  name: string = '';
  id: number = 0;
  moves: Move[] = [];
  types: Type[] = [];

  constructor(pokemonResult: any) {
    this.buildFieldsPokemon(pokemonResult);
  }

  buildFieldsPokemon(pokemon: any) {
    this.name = pokemon.name;
    this.id = pokemon.id;
    // you can only choose four moves from the list of moves
    this.moves = this.chooseMoves(pokemon.moves);
    this.types = pokemon.types;
  }

  chooseMoves(moves: any[]) {
    let selectedMoves: Move[] = [];
    
    for(let i = 0; i < 4; i++) {
      let index = Math.round(Math.random() * (moves.length - 1));
      
      while(selectedMoves.includes(moves[index])) {
        index = Math.round(Math.random() * (moves.length - 1));
      }

      selectedMoves.push(moves[index]);
    }

    return selectedMoves;
  }

  formatMove(moveObject: any): Move {
    return { name: moveObject.move.name, url: moveObject.move.url };
  }

  displayInfo() {
    console.log(`==========================`);
    console.log(`Pokemon: ${this.id} -> ${this.name}`);
    
    console.log('\nTypes\n=====');
    this.types.forEach(type => {
      console.log(`${type.name}`);
    });

    console.log('\nMoves\n=====');
    this.moves.forEach(move => {
      console.log(`${move.name}`);
    });
  }
}

@getNewPokemons
export class PokemonTrainer {
  name: string;
  pokemons: Pokemon[] = [];

  listOfIds: number[] = [2,4];
  
  constructor(name: string) {
    this.name = name;
  }

  async getPokemons() {
    const listPokemons = this.listOfIds.map(id => getPokemonData(id));
    const results = await Promise.all(listPokemons)
    results.forEach(result => {
      this.pokemons.push(new Pokemon(result));
    });
  }

  async showTeam() {
    await this.getPokemons();
    console.log('Trainer:', this.name);

    this.pokemons.forEach(pokemon => {
      pokemon.displayInfo();
    });
  }
}
