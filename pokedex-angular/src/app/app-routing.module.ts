import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonOrchestratorComponent } from './pokemons/pokemon-orchestrator/pokemon-orchestrator.component';
import { PokemonProfileComponent } from './pokemons/profile/pokemon-profile.component';

const routes: Routes = [
  {
    path: 'pokedex',
    component: PokemonOrchestratorComponent
  },
  { path: 'pokedex/:id', component: PokemonProfileComponent },
  { path: '', redirectTo: '/pokedex', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
