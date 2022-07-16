import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PokemonProfileComponent } from './pokemon-profile.component';

const routes = [
    {
        path: '',
        component: PokemonProfileComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PokemonProfileRoutingModule {}