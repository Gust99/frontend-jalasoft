import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { HomepageComponent } from "./homepage.component";

const routes = [
    {
        path: '',
        component: HomepageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomepageRountingModule {}