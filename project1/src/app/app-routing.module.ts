import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { todolistComponent } from './todolist/todolist.component';

const routes: Routes = [
  { path: 'todolist', component: todolistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
