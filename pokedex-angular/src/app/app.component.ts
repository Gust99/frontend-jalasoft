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
  offset: number = 0;
  limit: number = 0;

  constructor(private pokemonService: PokemonService) {}

  async ngOnInit(): Promise<void> {
    await this.getOriginalList();
  }

  getList(newList: Pokemon[]) {
    this.list = newList;
  }

  async getOriginalList() {
    this.originalList = (await lastValueFrom(this.pokemonService.getPokemonsList(this.offset,this.limit))).results;
  }

  async refreshOffset(offset: number = 0) {
    this.offset = offset;
    await this.getOriginalList();
  }

  async refreshLimit(limit: number = 50) {
    this.limit = limit;
    await this.getOriginalList();
  }
}
