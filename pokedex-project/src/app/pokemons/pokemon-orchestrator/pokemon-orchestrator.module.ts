import { NgModule } from "@angular/core";
import { SearchBarComponent } from '../../core/search-bar/search-bar.component';
import { PaginatorComponent } from '../../core/paginator/paginator.component';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';
import { PokemonsResolver } from "./pokemons.resolver";
import { CommonModule } from "@angular/common";
import { PokemonOrchestratorRoutingModule } from "./pokemon-orchestrator-routing.module";
import { FormsModule } from "@angular/forms";
import { PokemonOrchestratorComponent } from './pokemon-orchestrator.component';
import { PokemonComponent } from '../pokemon/pokemon.component';

@NgModule({
    declarations: [
        PokemonOrchestratorComponent,
        SearchBarComponent,
        PaginatorComponent,
        PokemonListComponent,
        PokemonComponent
    ],
    imports: [
        CommonModule,
        PokemonOrchestratorRoutingModule,
        FormsModule
    ],
    exports: [],
    providers: [PokemonsResolver]
})
export class PokemonOrchestratorModule {}