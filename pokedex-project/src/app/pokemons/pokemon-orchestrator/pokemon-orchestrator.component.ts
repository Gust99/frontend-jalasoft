import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Pokemon } from 'src/assets/utils/types';
import { PokemonService } from '../../pokemons/pokemons.service';
import { SearchBarComponent } from '../../core/search-bar/search-bar.component';

declare const dataPokemons: any;

@Component({
  selector: 'app-orchestrator',
  templateUrl: './pokemon-orchestrator.component.html',
  styleUrls: ['./pokemon-orchestrator.component.css']
})
export class PokemonOrchestratorComponent implements OnInit, OnDestroy {
  @ViewChild(SearchBarComponent) search!: SearchBarComponent;

  segmentedList: Pokemon[] = [];
  filteredList: Pokemon[] = [];
  offset: number = 0;
  limit: number = 50;
  loading = false;

  constructor(private pokemonService: PokemonService) {this.getSegmentedList();}

  async ngOnInit(): Promise<void> {
    this.filteredList = <Pokemon[]><unknown>JSON.parse(localStorage.getItem('filteredList') || '[]');
    this.segmentedList = <Pokemon[]><unknown>JSON.parse(localStorage.getItem('segmentedList') || '[]');
    this.offset = <number><unknown>JSON.parse(localStorage.getItem('offset') || '0');
    this.limit = <number><unknown>JSON.parse(localStorage.getItem('limit') || '50');

    await this.getSegmentedList();
  }

  ngOnDestroy(): void {
      localStorage.setItem('filteredList', JSON.stringify(this.filteredList));
      localStorage.setItem('segmentedList', JSON.stringify(this.segmentedList));
      localStorage.setItem('offset', JSON.stringify(this.offset));
      localStorage.setItem('limit', JSON.stringify(this.limit));
  }

  getFilteredList(newFilteredList: Pokemon[]) {
    this.filteredList = newFilteredList;
  }

  async getSegmentedList() {
    this.loading = true;

    const response = await this.pokemonService
                      .getPokemonsList(this.offset,this.limit);

    this.segmentedList = response.results as any;

    this.search.filter();

    this.loading = false;
  }

  async refreshOffset(offset: number = 0) {
    this.offset = offset;
    await this.getSegmentedList();
  }

  async refreshLimit(limit: number = 50) {
    this.limit = limit;
    await this.getSegmentedList();
  }
}
