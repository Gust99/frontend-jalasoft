import { Component } from '@angular/core';

declare const dataPokemons: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokedex-angular';
  list = dataPokemons.results;
  originalList = dataPokemons.results;

  refreshList(newList: any) {
    this.list = newList;
  }
}
