import { Component, Input } from "@angular/core";

@Component({
    selector: 'pokemon',
    templateUrl: './pokemon.component.html',
    styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
    @Input() src = '';
    @Input() name = '';
    @Input() color = '';

    getTextColor(): string {
        if(this.color === '#fbf6f6' || this.color === '#f0f060e6') {
            return 'black';
        } else {
            return 'white';
        }
    }
}