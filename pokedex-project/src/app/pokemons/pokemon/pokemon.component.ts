import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'pokemon',
    templateUrl: './pokemon.component.html',
    styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
    @Input() src = '';
    @Input() name = '';
    @Input() color = '';
    @Input() number = '0';

    constructor(private router: Router) {}

    getTextColor(): string {
        if(this.color === '#fbf6f6' || this.color === '#f0f060e6') {
            return 'black';
        } else {
            return 'white';
        }
    }

    goToPokemonProfile() {
        this.router.navigate(['/pokedex/list/', this.number]);
    }

    addZerosToNumber() {
        const numberOfZeros = 3 - this.number.length;
        let zeros = '';
        for(let i = 0; i < numberOfZeros; i++) {
            zeros += '0';
        }
        return zeros;
    }
}