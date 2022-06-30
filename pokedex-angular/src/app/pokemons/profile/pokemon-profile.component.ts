import { Component } from "@angular/core";
import { Location } from "@angular/common";

@Component({
    selector: 'pokemon-profile',
    templateUrl: './pokemon-profile.component.html',
    styleUrls: ['./pokemon-profile.component.css']
})
export class PokemonProfileComponent {
    constructor(private location: Location) {}

    goBack() {
        this.location.back();
    }
}