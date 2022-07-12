import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonProfileComponent } from './profile/pokemon-profile.component';
import { PokemonOrchestratorComponent } from './pokemon-orchestrator/pokemon-orchestrator.component';
import { PokemonsResolver } from './pokemon-orchestrator/pokemons.resolver';
import { PokemonResolver } from './profile/pokemon.resolver';

const routes: Routes = [
    {
        path: 'pokedex',
        component: PokemonOrchestratorComponent,
        resolve: {
            pokemons: PokemonsResolver
        }
    },
    { 
        path: 'pokedex/:id', 
        component: PokemonProfileComponent,
        resolve: {
            pokemon: PokemonResolver
        } 
    },
    { path: '', redirectTo: '/pokedex', pathMatch: 'full' }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PokemonRoutingModule {}