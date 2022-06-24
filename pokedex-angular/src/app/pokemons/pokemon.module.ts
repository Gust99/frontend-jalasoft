import { NgModule } from "@angular/core";
import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PokemonComponent } from './pokemon/pokemon.component';

@NgModule({
    declarations: [
        PokemonListComponent,
        PokemonComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    exports: [
        PokemonListComponent
    ],
    providers: []
})
export class PokemonModule {}