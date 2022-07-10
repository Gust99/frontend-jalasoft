import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemons.service';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

declare function getPokemonImageUri(id: string): string;

@Component({
    selector: 'pokemon-profile',
    templateUrl: './pokemon-profile.component.html',
    styleUrls: ['./pokemon-profile.component.css']
})
export class PokemonProfileComponent implements OnInit {
    barChartOptions: ChartConfiguration['options'] = {
        responsive: true,
        scales: {
          x: {},
          y: {
            min: 0
          }
        },
        plugins: {
          legend: {
            display: true,
          }
        }
    };

    barChartType: ChartType = 'bar';

    barChartData: ChartData<'bar', number[]> = {
        labels: [],
        datasets: []
    };

    id: string = '1';
    name = '';
    types: string[] = [];
    abilities: string[] = [];
    forms: string[] = [];
    imgSRC: string = '';
    stats: {[x:string]: string}[] = [];

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

        this.setPokemonName(response);
        this.setPokemonTypes(response);
        this.setPokemonAbilities(response);
        this.setPokemonForms(response);
        this.setPokemonStats(response);
        this.setPokemonImgURI(id);
        this.setChartData();
    }

    setPokemonName(response: any) {
        this.name = response.species.name;
    }

    setPokemonTypes(response: any) {
        this.types = response.types.map((type: any) => {
            return type.type.name;
        });
    }

    setPokemonAbilities(response: any) {
        this.abilities = response.abilities.map((ability: any) => {
            return ability.ability.name;
        });
    }

    setPokemonForms(response: any) {
        this.forms = response.forms.map((form: any) => {
            return form.name
        });
    }

    setPokemonStats(response: any) {
        this.stats = response.stats.map((stat: any) => {
            return { base: stat.base_stat, effort: stat.effort, label: stat.stat.name };
        });
    }

    setPokemonImgURI(id: string) {
        this.imgSRC = getPokemonImageUri(id);
    }

    setChartData() {
        this.barChartData.labels = this.stats.map((stat:any) => stat.label);
        this.barChartData.datasets = [{ data: this.stats.map((stat:any) => stat.base), label: 'Stats' }];
    }
}