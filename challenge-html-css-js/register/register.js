window.addEventListener('DOMContentLoaded', () => {
    const pokemonForm = document.querySelector('#pokemon-form');
    const pokemonNameInput = document.querySelector('#pokemon-name');
    const pokemonOriginInput = document.querySelector('#origin');
    const pokemonHabilitySelect = document.querySelector('#hability');

    const submitButton = document.querySelector('#submitBtn');
    const resetButton = document.querySelector('#resetBtn');

    resetButton.addEventListener('click', () => {
        checkForm();
    });

    pokemonNameInput.addEventListener('keyup', () => {
        if(validatePokemonName(pokemonNameInput)) {
            addValidFeedback(pokemonNameInput);
        } else {
            addInvalidFeedback(pokemonNameInput);
        }
    });

    pokemonOriginInput.addEventListener('keyup', () => {
        if(validatePokemonOrigin(pokemonOriginInput)) {
            addValidFeedback(pokemonOriginInput);
        } else {
            addInvalidFeedback(pokemonOriginInput);
        }
    });

    pokemonHabilitySelect.addEventListener('change', () => {
        if(validatePokemonHability(pokemonHabilitySelect)) {
            addValidFeedback(pokemonHabilitySelect);
        } else {
            addInvalidFeedback(pokemonHabilitySelect);
        }
    });

    pokemonForm.addEventListener('submit', event => {
        event.preventDefault();
        
        if(checkForm()) {
            alert('New pokemon registration request sent.');
        }
    });

    function checkForm() {
        let valid = true;
        if(!validatePokemonName(pokemonNameInput)) {
            addInvalidFeedback(pokemonNameInput);
        }
        if(!validatePokemonOrigin(pokemonOriginInput)) {
            addInvalidFeedback(pokemonOriginInput);
        }
        if(!validatePokemonHability(pokemonHabilitySelect)) {
            addInvalidFeedback(pokemonHabilitySelect);
        }
        return  valid;
    }

    function validatePokemonName(input) {
        const regex = new RegExp(/^[a-zA-Z]{4,10}$/g);
        return regex.test(input.value);
    }

    function validatePokemonOrigin(input) {
        const regex = new RegExp(/^[a-zA-Z]{4,10}([ ].[a-zA-Z].)$/g);
        return regex.test(input.value);
    }

    function validatePokemonHability(select) {
        return select.value !== 'default';
    }

    function addInvalidFeedback(field) {
        field.classList.remove('is-valid');
        field.classList.add('is-invalid');
        field.nextElementSibling.removeAttribute('hidden');
        submitButton.disabled = true;
    }
    
    function addValidFeedback(field) {
        field.classList.remove('is-invalid');
        field.classList.add('is-valid');
        field.nextElementSibling.setAttribute('hidden', true);
        submitButton.removeAttribute('disabled');
    }
});