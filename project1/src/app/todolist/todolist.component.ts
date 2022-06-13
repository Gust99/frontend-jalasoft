import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'todo-list',
    templateUrl: './todolist.component.html',
    styleUrls: ['./todolist.component.css']
})
export class todolistComponent implements OnInit{
    list: string[] = [];
    input: HTMLInputElement;
    
    constructor() {
        this.input = document.getElementById("newitem") as HTMLInputElement;
    }
    
    ngOnInit(): void {
        const lastList = localStorage.getItem('list');
        if(lastList) {
            this.list = lastList.split('.');
        }
    }

    addNewItem(event: any) {
        this.input = document.getElementById("newitem") as HTMLInputElement;
        if(event.key === 'Enter') {
            this.list.push(this.input.value);
            localStorage.setItem('list',this.list.join('.'));
            this.input.value = '';
        }
    }

    deleteItem(index: number) {
        this.list.splice(index);
        localStorage.setItem('list',this.list.join('.'));
    }
}