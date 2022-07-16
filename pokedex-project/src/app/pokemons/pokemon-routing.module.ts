import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonsResolver } from './pokemon-orchestrator/pokemons.resolver';
import { PokemonResolver } from './profile/pokemon.resolver';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';

const routes: Routes = [
    {
        path: 'add',
        loadChildren: () => import('./pokemon-form/pokemon-form.module').then(m => m.PokemonFormModule)
    },
    {
        path: 'list',
        loadChildren: () => import('./pokemon-orchestrator/pokemon-orchestrator.module').then(m => m.PokemonOrchestratorModule),
        resolve: {
            pokemons: PokemonsResolver
        }
    },
    { 
        path: 'list/:id', 
        loadChildren: () => import('./profile/pokemon-profile.module').then(m => m.PokemonProfileModule),
        resolve: {
            pokemon: PokemonResolver
        }
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PokemonRoutingModule {}