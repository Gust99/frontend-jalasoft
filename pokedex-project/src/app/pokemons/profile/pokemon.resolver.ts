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
        const species = await this.pokemonService.getPokemonSpecies(pokemonID);
        const evolutions = await this.pokemonService.getPokemonEvolutions(species.evolution_chain.url);
        return {profile, evolutions, description: species.flavor_text_entries[0].flavor_text};
    }
}