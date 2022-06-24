import { Component } from '@angular/core';

declare function getPokemonImageUri(id: number): string;
declare const pokemonColorMap: any;
declare const dataPokemons: any;

@Component({
    selector: 'pokedex',
    templateUrl: './pokedex.component.html',
    styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent {
    src = '';
    name = '';
    list = dataPokemons.results;

    getImageSRC(url: string): string {
        let id = this.getID(url);
        return getPokemonImageUri(parseInt(id));
    }

    getID(url: string): string {
        let urlArray = url.split('/');
        return urlArray[urlArray.length-2];
    }

    getColor(url: string) {
        return pokemonColorMap[this.getID(url)];
    }
}