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

    @Input() list: any[] = [];

    constructor(private pokemonService: PokemonService) {}

    ngOnInit(): void {
        this.getPokemons(0, 50);
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

    getPokemons(offset: number, limit: number) {
        this.pokemonService.getPokemonsList(offset, limit)
        .subscribe(
            (data: {results: Pokemon[]}) => this.list = [...this.list, ...data.results]
        );
        // this.offset += this.limit;
    }
}