import { Component, Input, Output,EventEmitter } from "@angular/core";
import { Pokemon } from '../../../assets/utils/types';

@Component({
    selector: 'search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
    @Input() list: Pokemon[] = [];
    @Output() outputEmitter = new EventEmitter<Pokemon[]>();
    @Output() outputOffset = new EventEmitter<number>();
    @Output() outputLimit = new EventEmitter<number>();

    filteredList: Pokemon[] = [];
    inputValue: string = '';
    offset = 0;
    limit = 50;

    filter() {
        this.filteredList = this.list.filter(pokemon => {
            return (this.inputValue === '') 
                ? true 
                : ((pokemon as any).name as string)
                    .match(new RegExp(this.inputValue,'i'));
        });
        this.outputEmitter.emit(this.filteredList);
    }

    sendOffset() {
        const lastList = [...this.list];
        this.outputOffset.emit(this.offset || 0);
        while(lastList === this.list) {}
        this.filter();
    }

    sendLimit() {
        const lastList = [...this.list];
        this.outputLimit.emit(this.limit || 50);
        while(lastList === this.list) {}
        this.filter();
    }
}