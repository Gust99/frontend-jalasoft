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
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const pokemon = this.pokemonService.getPokemonData(route.paramMap.get('id') || '1');
        return pokemon;
    }
}