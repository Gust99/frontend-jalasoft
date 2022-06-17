import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'todo-list',
    templateUrl: './todolist.component.html',
    styleUrls: ['./todolist.component.css']
})
export class todolistComponent implements OnInit{
    list: string[] = [];
    task: string = '';
    
    constructor() {
    }
    
    ngOnInit(): void {
        const lastList = localStorage.getItem('list');
        if(lastList) {
            this.list = lastList.split('.');
        }
    }

    addNewItem(event: any) {
        if(event.key === 'Enter') {
            this.list.push(this.task);
            localStorage.setItem('list',this.list.join('.'));
            this.task = '';
        }
    }

    deleteItem(index: number) {
        this.list.splice(index);
        localStorage.setItem('list',this.list.join('.'));
    }
}