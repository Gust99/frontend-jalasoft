import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class PokemonService {
    private api = 'https://pokeapi.co/api/v2'

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
}