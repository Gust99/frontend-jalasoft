import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'pokemon-form',
    templateUrl: './pokemon-form.component.html',
    styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {
    profileForm = new FormGroup({
        pokemonName: new FormControl(''),
        pokemonDescription: new FormControl(''),
        pokemonTypes: new FormControl(''),
        pokemonForms: new FormControl('')
    });

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        // throw new Error('Method not implemented.');
    }

    getTypes() {
        return this.profileForm.get('types') as FormArray;
    }

    addType() {
        this.getTypes().push(this.fb.control(''));
    }

    onSubmit() {
        console.warn(this.profileForm.value);
    }
}
