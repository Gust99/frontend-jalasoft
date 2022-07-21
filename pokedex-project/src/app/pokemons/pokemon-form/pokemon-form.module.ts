import { NgModule } from "@angular/core";
import { PokemonFormComponent } from './pokemon-form.component';
import { CommonModule } from '@angular/common';
import { PokemonFormRoutingModule } from './pokemon-form-routing.module';
import { ReactiveFormsModule } from "@angular/forms";
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from '../../core/dialog/dialog.component';

@NgModule({
    declarations: [
        PokemonFormComponent,
        DialogComponent
    ],
    imports: [
        CommonModule,
        PokemonFormRoutingModule,
        ReactiveFormsModule,
        MatDialogModule
    ],
    exports: [],
    providers: []
})
export class PokemonFormModule {}