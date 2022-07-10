import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-paginator',
    templateUrl: './paginator.component.html',
    styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent {
    @Output() outputOffset = new EventEmitter<number>();
    @Output() outputLimit = new EventEmitter<number>();
    inputOffset = 0;
    inputLimit = 50;

    sendOffset() {
        this.outputOffset.emit(this.inputOffset || 0);
    }

    sendLimit() {
        this.outputLimit.emit(this.inputLimit || 50);
    }
}