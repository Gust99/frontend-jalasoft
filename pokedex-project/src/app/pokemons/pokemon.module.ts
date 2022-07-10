import { NgModule } from "@angular/core";
import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PokemonComponent } from './pokemon/pokemon.component';
import { HttpClientModule } from "@angular/common/http";
import { PokemonProfileComponent } from './profile/pokemon-profile.component';
import { PokemonOrchestratorComponent } from './pokemon-orchestrator/pokemon-orchestrator.component';
import { PokemonService } from './pokemons.service';
import { SearchBarComponent } from '../core/search-bar/search-bar.component';
import { PaginatorComponent } from '../core/paginator/paginator.component';
import { PokemonRoutingModule } from "./pokemon-routing.module";
import { NgChartsModule } from 'ng2-charts';

@NgModule({
    declarations: [
        PokemonListComponent,
        PokemonComponent,
        PokemonProfileComponent,
        PokemonOrchestratorComponent,
        SearchBarComponent,
        PaginatorComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        PokemonRoutingModule,
        NgChartsModule
    ],
    exports: [],
    providers: [PokemonService]
})
export class PokemonModule {}