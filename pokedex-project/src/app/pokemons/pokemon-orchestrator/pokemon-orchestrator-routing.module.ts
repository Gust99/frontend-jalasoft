import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PokemonOrchestratorComponent } from './pokemon-orchestrator.component';

const routes = [
    {
        path: '',
        component: PokemonOrchestratorComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PokemonOrchestratorRoutingModule {}