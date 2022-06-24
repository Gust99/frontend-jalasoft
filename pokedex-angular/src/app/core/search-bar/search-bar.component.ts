import { Component, Input, Output } from "@angular/core";

@Component({
    selector: 'search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
    @Input() list = [];
    @Output() filteredList = [];
    inputValue: string = '';

    filter() {
        this.filteredList = this.list.filter(pokemon => {
            return (pokemon as any).name === this.inputValue;
        });
    }
}