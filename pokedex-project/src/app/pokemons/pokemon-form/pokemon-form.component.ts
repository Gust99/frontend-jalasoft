import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { DialogComponent } from '../../core/dialog/dialog.component';

@Component({
    selector: 'pokemon-form',
    templateUrl: './pokemon-form.component.html',
    styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {
    profileForm = this.fb.group({
        pokemonName: ['', [
            Validators.required,
            Validators.maxLength(20),
            Validators.minLength(3),
            Validators.pattern(/^[a-zA-Z\s]+$/)
        ]],
        pokemonDescription: ['', [
            Validators.required,
            Validators.maxLength(200),
            Validators.minLength(20),
            Validators.pattern(/^[a-zA-Z0-9\.\-\_\,\s]+$/)
        ]],
        pokemonHeight: [0, [
            Validators.required,
            Validators.min(0),
            Validators.max(200)
        ]],
        pokemonWeight: [0, [
            Validators.required,
            Validators.min(0),
            Validators.max(10000)
        ]],
        pokemonTypes: ['', [
            Validators.required,
        ]],
        pokemonAbilities: ['', [
            Validators.required
        ]]
    });

    errors = {
        required: undefined,
        min: undefined,
        max: undefined,
        maxlength: undefined,
        minlength: undefined,
        pattern: undefined
    }

    constructor(
        private fb: FormBuilder,
        private dialog: MatDialog
    ) {}

    ngOnInit(): void {
        // throw new Error('Method not implemented.');
    }

    openDialog(): void {
        this.dialog.open(DialogComponent);
    }

    getTypes() {
        return this.profileForm.get('types') as FormArray;
    }

    addType() {
        this.getTypes().push(this.fb.control(''));
    }

    onSubmit() {
        console.warn(this.profileForm.value);
        this.openDialog();
    }

    validInput(inputName: string) {
        return (this.profileForm.get(inputName)?.touched) ? this.profileForm.get(inputName)?.valid : true;
    }

    getInputErrors(inputName: string) {
        return this.profileForm.get(inputName)?.errors || this.errors;
    }

    validForm() {
        return this.profileForm.valid;
    }
}
