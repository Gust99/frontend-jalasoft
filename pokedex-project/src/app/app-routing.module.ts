import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'homepage',
    loadChildren: () => import('./core/homepage/homepage.module').then(m => m.HomePageModule)
  },
  {
    path: 'pokedex',
    loadChildren: () => import('./pokemons/pokemon.module').then(m => m.PokemonModule)
  },
  { path: '**', redirectTo: '/homepage', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
