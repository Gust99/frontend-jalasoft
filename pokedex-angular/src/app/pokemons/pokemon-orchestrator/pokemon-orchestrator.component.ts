import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Pokemon } from 'src/assets/utils/types';
import { PokemonService } from '../../pokemons/pokemons.service';

declare const dataPokemons: any;

@Component({
  selector: 'app-orchestrator',
  templateUrl: './pokemon-orchestrator.component.html',
  styleUrls: ['./pokemon-orchestrator.component.css']
})
export class PokemonOrchestratorComponent implements OnInit {
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
    this.pokemonService.getPokemonsList(this.offset,this.limit).subscribe((res) => {
      this.originalList = res.results;
    });
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
