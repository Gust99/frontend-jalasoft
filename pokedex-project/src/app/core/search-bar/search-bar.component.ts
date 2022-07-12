import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Pokemon } from '../../../assets/utils/types';

@Component({
    selector: 'search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
    @Input() list: Pokemon[] = [];
    @Output() outputEmitter = new EventEmitter<Pokemon[]>();

    filteredList: Pokemon[] = [];
    inputValue: string = '';

    constructor() {}

    ngOnInit(): void {
        this.filter();
    }

    filter() {
        this.filteredList = [];
        
        this.filteredList = this.list.filter(pokemon => {
            return (this.inputValue === '') 
                ? true 
                : ((pokemon as any).name as string)
                    .match(new RegExp(this.inputValue,'i'));
        });
        this.outputEmitter.emit(this.filteredList);
    }
}