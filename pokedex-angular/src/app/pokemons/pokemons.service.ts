import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Pokemon } from "src/assets/utils/types";

@Injectable({
    providedIn: 'root'
})
export class PokemonService {
    private api = 'https://pokeapi.co/api/v2'

    constructor(private http: HttpClient) {}

    getPokemonsList(offset: number = 0, limit: number = 25) {
        return this.http
            .get(`${this.api}/pokemon?limit=${limit}&offset=${offset}`) as Observable<{results: Pokemon[]}>;
    }
}