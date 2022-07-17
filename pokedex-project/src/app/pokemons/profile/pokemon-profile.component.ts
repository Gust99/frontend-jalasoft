import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../pokemons.service';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { Subscription } from 'rxjs';

declare function getPokemonImageUri(id: string): string;

@Component({
    selector: 'pokemon-profile',
    templateUrl: './pokemon-profile.component.html',
    styleUrls: ['./pokemon-profile.component.css']
})
export class PokemonProfileComponent implements OnInit, OnDestroy {
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

    id = '1';
    name = 'Pokemon';
    height = '0';
    weight = '0';
    imgSRC = '';
    types: string[] = [];
    abilities: string[] = [];
    stats: {[x:string]: string}[] = [];
    evolutions: {[x:string]: string}[] = [];
    description = '';
    subscription!: Subscription;

    constructor(
        private route: ActivatedRoute,
        public pokemonService: PokemonService,
        private router: Router 
    ) {}

    ngOnInit(): void {
        this.subscription = this.route.paramMap.subscribe((params: any) => {
            const pokemon = this.route.snapshot.data["pokemon"];
            console.log(pokemon);
            this.evolutions = [];
            this.barChartData = {
                labels: [],
                datasets: []
            };
            this.description = pokemon.description;
            this.setPokemonData(pokemon.profile);
            this.setPokemonEvolutions(pokemon.evolutions.chain);
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    goBack() {
        this.router.navigate(['/pokedex/list']);
    }

    setPokemonData(pokemon: any) {
        this.setPokemonBasicInfo(pokemon);
        this.setPokemonTypes(pokemon);
        this.setPokemonAbilities(pokemon);
        this.setPokemonStats(pokemon);
        this.setPokemonImgURI(pokemon.id);
        this.setChartData();
    }

    setPokemonBasicInfo(pokemon: any) {
        this.id = pokemon.id;
        this.name = pokemon.species.name;
        this.height = (pokemon.height / 10).toString();
        this.weight = (pokemon.weight / 10).toString();
    }

    setPokemonTypes(pokemon: any) {
        this.types = pokemon.types.map((type: any) => {
            return type.type.name;
        });
    }

    setPokemonAbilities(pokemon: any) {
        this.abilities = pokemon.abilities.map((ability: any) => {
            return ability.ability.name;
        });
    }

    setPokemonStats(pokemon: any) {
        this.stats = pokemon.stats.map((stat: any) => {
            return { base: stat.base_stat, effort: stat.effort, label: stat.stat.name };
        });
    }

    setPokemonImgURI(id: string) {
        this.imgSRC = getPokemonImageUri(id);
    }

    setChartData() {
        this.barChartData.labels = this.stats.map((stat:any) => stat.label);
        this.barChartData.datasets = [
            { 
                data: this.stats.map((stat:any) => stat.base), 
                label: 'Stats', 
                backgroundColor: ['#003a70'],
                hoverBackgroundColor: ['#003a70']
            }
        ];
    }

    setPokemonEvolutions(evolution_chain: any) {
        const evolutionID = evolution_chain.species.url
                                .split(/[^0-9]+\//g).pop()
                                .split('/')[0];
        this.evolutions.push({
            name: evolution_chain.species.name,
            id: evolutionID,
            imgSRC: getPokemonImageUri(evolutionID)
        });
        
        if(evolution_chain.evolves_to.length === 0) {
            return;
        }
        
        this.setPokemonEvolutions(evolution_chain.evolves_to[0]);
    }

    addZerosToNumber(id: string) {
        const numberOfZeros = 3 - id.toString().length;
        let zeros = '';
        for(let i = 0; i < numberOfZeros; i++) {
            zeros += '0';
        }
        return zeros;
    }

    goToProfile(id: string) {
        this.router.navigate(['/pokedex/list/',id]);
    }
}