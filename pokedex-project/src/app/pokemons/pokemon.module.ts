import { NgModule } from "@angular/core";
import { PokemonService } from './pokemons.service';
import { PokemonRoutingModule } from "./pokemon-routing.module";

@NgModule({
    declarations: [],
    imports: [
        PokemonRoutingModule
    ],
    exports: [],
    providers: [PokemonService]
})
export class PokemonModule {}