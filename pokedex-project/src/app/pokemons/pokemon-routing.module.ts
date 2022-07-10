import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { PokemonProfileComponent } from './profile/pokemon-profile.component';
import { PokemonOrchestratorComponent } from './pokemon-orchestrator/pokemon-orchestrator.component';

const routes: Routes = [
    {
        path: 'pokedex',
        component: PokemonOrchestratorComponent
    },
    { path: 'pokedex/:id', component: PokemonProfileComponent },
    { path: '', redirectTo: '/pokedex', pathMatch: 'full' }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PokemonRoutingModule {}