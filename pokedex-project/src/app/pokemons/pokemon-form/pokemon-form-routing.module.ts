import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PokemonFormComponent } from './pokemon-form.component';

const routes = [
    {
        path: '',
        component: PokemonFormComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PokemonFormRoutingModule {}