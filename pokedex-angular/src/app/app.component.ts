import { Component, Inject } from '@angular/core';
import { PokemonService } from './pokemons/pokemons.service';

declare const dataPokemons: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private pokemonService: PokemonService) {}
  title = 'pokedex-angular';
  list = dataPokemons.results;
  originalList = dataPokemons.results;

  refreshList(newList: any) {
    this.list = newList;
  }
}
