import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Pokemon } from 'src/assets/utils/types';
import { PokemonService } from '../../pokemons/pokemons.service';
import { SearchBarComponent } from '../../core/search-bar/search-bar.component';
import { ActivatedRoute } from '@angular/router';

declare const dataPokemons: any;

@Component({
  selector: 'app-orchestrator',
  templateUrl: './pokemon-orchestrator.component.html',
  styleUrls: ['./pokemon-orchestrator.component.css']
})
export class PokemonOrchestratorComponent implements OnInit {
  @ViewChild(SearchBarComponent) search!: SearchBarComponent;

  segmentedList: Pokemon[] = [];
  filteredList: Pokemon[] = [];
  offset: number = 0;
  limit: number = 50;
  loading = false;

  constructor(
    private pokemonService: PokemonService,
    private router: ActivatedRoute  
  ) {}

  ngOnInit(): void {
    const pokemons = this.router.snapshot.data["pokemons"];
    this.getPreloadSegmentedList(pokemons.results);
  }

  getFilteredList(newFilteredList: Pokemon[]) {
    this.filteredList = newFilteredList;
  }

  async getSegmentedList() {
    this.loading = true;

    let response = (await this.pokemonService
      .getPokemonsList(this.offset,this.limit)).results as any;

    this.segmentedList = response

    this.search.list = this.segmentedList;
    
    this.search.filter();

    this.loading = false;
  }
  
  getPreloadSegmentedList(preloadPokemons?: Pokemon[]) {
    this.loading = true;
    
    this.segmentedList = preloadPokemons || [];

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
