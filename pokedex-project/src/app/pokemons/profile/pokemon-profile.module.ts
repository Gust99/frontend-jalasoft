import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PokemonProfileComponent } from './pokemon-profile.component';
import { PokemonProfileRoutingModule } from './pokemon-profile-routing.module';
import { NgChartsModule } from "ng2-charts";
import { PokemonResolver } from './pokemon.resolver';

@NgModule({
    declarations: [
        PokemonProfileComponent
    ],
    imports: [
        CommonModule,
        PokemonProfileRoutingModule,
        NgChartsModule
    ],
    exports: [],
    providers: [PokemonResolver]
})
export class PokemonProfileModule {}