import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemons.service';

declare function getPokemonImageUri(id: string): string;

@Component({
    selector: 'pokemon-profile',
    templateUrl: './pokemon-profile.component.html',
    styleUrls: ['./pokemon-profile.component.css']
})
export class PokemonProfileComponent implements OnInit {
    id: string = '1';
    name = '';
    types: string[] = [];
    abilities: string[] = [];
    forms: string[] = [];
    imgSRC: string = '';

    constructor(
        private location: Location,
        private route: ActivatedRoute,
        public pokemonService: PokemonService    
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
        console.log(response.stats);
        this.name = response.species.name;

        this.types = response.types.map((type: any) => {
            return type.type.name;
        });

        this.abilities = response.abilities.map((ability: any) => {
            return ability.ability.name;
        });

        this.forms = response.forms.map((form: any) => {
            return form.name
        });

        this.imgSRC = getPokemonImageUri(id);
    }
}