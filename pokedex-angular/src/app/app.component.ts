import { Component, Inject, OnInit } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { Pokemon } from 'src/assets/utils/types';
import { PokemonService } from './pokemons/pokemons.service';

declare const dataPokemons: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pokedex-angular';
  list: Pokemon[] = [];
  originalList: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) {}

  async ngOnInit(): Promise<void> {
      this.originalList = (await lastValueFrom(this.pokemonService.getPokemonsList(0,50))).results;
  }

  refreshList(newList: Pokemon[]) {
    this.list = newList;
  }
}
