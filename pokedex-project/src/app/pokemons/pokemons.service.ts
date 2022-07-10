import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class PokemonService {
    private api = 'https://pokeapi.co/api/v2';

    pokemonColorPool: {[x:string]: string} = {
        '1': '#D6A2AD',
        '2': '#C3B59F',
        '3': '#A0AF84',
        '4': '#668F80',
        '5': '#4A6670'
    }

    constructor() {}

    async getPokemonsList(offset: number = 0, limit: number = 50) {
        return await fetch(`${this.api}/pokemon?limit=${limit}&offset=${offset}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json());
    }

    async getPokemonData(id: string) {
        return await fetch(`${this.api}/pokemon/${id}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json());
    }

    getPokemonRandomColor() {
        const index = Math.round(Math.random() * 4 + 1).toString();
        return this.pokemonColorPool[index];
    }
}