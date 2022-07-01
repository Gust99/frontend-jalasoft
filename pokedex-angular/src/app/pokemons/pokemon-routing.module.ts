import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
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
    imports: [RouterModule.forRoot(routes)],
    exports: [PokemonRoutingModule]
})
export class PokemonRoutingModule {}