import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemons.service';

@Component({
    selector: 'pokemon-profile',
    templateUrl: './pokemon-profile.component.html',
    styleUrls: ['./pokemon-profile.component.css']
})
export class PokemonProfileComponent implements OnInit {
    id: string = '1';
    name = '';
    types: string[] = [];

    constructor(
        private location: Location,
        private route: ActivatedRoute,
        private pokemonService: PokemonService    
    ) {}

    async ngOnInit(): Promise<void> {
        this.id = this.route.snapshot.paramMap.get('id') || '1';
        await this.getPokemonData(this.id);
    }

    goBack() {
        this.location.back();
    }

    async getPokemonData(id: string) {
        const response = await this.pokemonService.getPokemonData(id);

        this.name = response.species.name;

        this.types = response.types.map((type: any) => {
            return type.type.name;
        });
    }
}