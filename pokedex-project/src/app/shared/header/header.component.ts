import { Component, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
    selector: 'poke-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    @ViewChild('list') list!: ElementRef<HTMLUListElement>;
    
    url: string = '';

    constructor(
        private router: Router
    ) {
        this.router.events.subscribe(event => {
            if(event instanceof NavigationStart) {
                this.url = event.url;
                this.translateRouteToListIndex();
            }
        });
    }

    goToPage(path: string) {
        this.router.navigate([path]);
    }

    setActive(activeItemIndex: number) {
        const itemsList = this.list.nativeElement.children;
        
        for(let index = 0; index < itemsList.length; index++) {
            if(index !== activeItemIndex) {
                itemsList[index].classList.remove('active');
            }
        }

        if(activeItemIndex !== -1) {
            itemsList[activeItemIndex].classList.add('active');
        } else if(!this.url.startsWith('/pokedex/list/')) {
            itemsList[0].classList.add('active');
        }
    }
    translateRouteToListIndex() {
        switch(this.url) {
            case '/homepage':
                this.setActive(0);
                break;
            case '/pokedex/list':
                this.setActive(1);
                break;
            case '/pokedex/add':
                this.setActive(2);
                break;
            default:
                this.setActive(-1);
        }
    }
}