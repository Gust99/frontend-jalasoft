import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-paginator',
    templateUrl: './paginator.component.html',
    styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent {
    @Output() outputOffset = new EventEmitter<number>();
    @Output() outputLimit = new EventEmitter<number>();
    
    offset = 0;
    limit = 50;

    sendOffset() {
        this.outputOffset.emit(this.offset || 0);
    }

    sendLimit() {
        this.outputLimit.emit(this.limit || 50);
    }
}