import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { PokemonService } from '../pokemons.service';

@Injectable({
    providedIn: 'root'
})
export class PokemonResolver implements Resolve<any> {
    constructor(
        private pokemonService: PokemonService,
    ) {}
    
    async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const pokemonID = route.paramMap.get('id') || '1';
        const profile = await this.pokemonService.getPokemonData(pokemonID);
        const evolutions = await this.pokemonService.getPokemonEvolutions(pokemonID);
        return {profile, evolutions};
    }
}