import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/assets/utils/types';
import { PokemonService } from '../pokemons.service';

declare function getPokemonImageUri(id: number): string;
declare const pokemonColorMap: any;

@Component({
    selector: 'pokedex',
    templateUrl: './pokemon-list.component.html',
    styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
    src = '';
    name = '';
    offset = 0;
    limit = 50;

    @Input() list: any[] = [];

    constructor(private pokemonService: PokemonService) {}

    ngOnInit(): void {
        this.getPokemons();
    }

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

    getPokemons() {
        this.pokemonService.getPokemonsList(this.offset, this.limit)
        .subscribe(
            (data: {results: Pokemon[]}) => this.list = [...this.list, ...data.results]
        );
        this.offset += this.limit;
    }
}