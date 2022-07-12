import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { PokemonService } from '../pokemons.service';

@Injectable({
    providedIn: 'root'
})
export class PokemonsResolver implements Resolve<any> {
    constructor(private pokemonService: PokemonService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.pokemonService.getPokemonsList(0,50);
    }
}