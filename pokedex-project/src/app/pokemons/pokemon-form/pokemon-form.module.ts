import { NgModule } from "@angular/core";
import { PokemonFormComponent } from './pokemon-form.component';
import { CommonModule } from '@angular/common';
import { PokemonFormRoutingModule } from './pokemon-form-routing.module';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        PokemonFormComponent
    ],
    imports: [
        CommonModule,
        PokemonFormRoutingModule,
        ReactiveFormsModule
    ],
    exports: [],
    providers: []
})
export class PokemonFormModule {}