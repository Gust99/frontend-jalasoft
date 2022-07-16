import { NgModule } from "@angular/core";
import { HomepageComponent } from './homepage.component';
import { CommonModule } from '@angular/common';
import { HomepageRountingModule } from './homepage-routing.module';

@NgModule({
    declarations: [
        HomepageComponent
    ],
    imports: [
        CommonModule,
        HomepageRountingModule
    ],
    exports: [],
    providers: []
})
export class HomePageModule {}