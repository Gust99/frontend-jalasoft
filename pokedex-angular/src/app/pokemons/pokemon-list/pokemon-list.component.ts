import { Component, Input, OnInit } from '@angular/core';

declare function getPokemonImageUri(id: number): string;
declare const pokemonColorMap: any;

@Component({
    selector: 'pokedex',
    templateUrl: './pokemon-list.component.html',
    styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
    src = '';
    name = '';

    @Input() list: any[] = [];

    constructor() {}

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