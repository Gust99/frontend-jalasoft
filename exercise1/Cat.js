class Cat {
    #hunger;
    #lonliness;
    #tiredness;

    constructor() {
        this.#hunger = 0;
        this.#lonliness = 0;
        this.#tiredness = 0;
    }

    getStatus() {
        return `Hunger: ${this.#hunger} | Lonliness: ${this.#lonliness} | Tiredness: ${this.#tiredness}`;
    }

    getHunger() {
        return this.#hunger;
    }

    getLonliness() {
        return this.#lonliness;
    }

    getTiredness() {
        return this.#tiredness;
    }

    eat() {
        if(Cat.checkBoundaries(this.#hunger - 1)) {
            this.#hunger--;

            console.log('Eating success!');

            return true;
        }

        console.log('Eating failed.');

        return false;
    }

    sleep() {
        if(Cat.checkBoundaries(this.#tiredness - 1)) {
            this.#tiredness--;

            console.log('Sleeping success!');

            return true;
        }

        console.log('Sleeping failed.');

        return false;
    }

    fight() {
        if(Cat.checkBoundaries(this.#tiredness + 4) 
        && Cat.checkBoundaries(this.#hunger + 4) 
        && Cat.checkBoundaries(this.#lonliness - 1)) {
            this.#tiredness += 4;
            this.#hunger += 4;
            this.#lonliness--;

            console.log('Fighting success!');

            return true;
        }

        console.log('Fighting failed.');

        return false;
    }

    socialize() {
        if(Cat.checkBoundaries(this.#lonliness - 2)) {
            this.#lonliness -= 2;

            console.log('Socializing success!');

            return true;
        }

        console.log('Socializing failed.');

        return false;
    }

    walk() {
        if(Cat.checkBoundaries(this.#tiredness + 2) && Cat.checkBoundaries(this.#hunger + 1)) {
            this.#tiredness += 2;
            this.#hunger++;

            console.log('Walking success!');

            return true;
        }

        console.log('Walking failed.');

        return false;
    }

    run() {
        if(Cat.checkBoundaries(this.#tiredness + 3) && Cat.checkBoundaries(this.#hunger + 2)) {
            this.#tiredness += 3;
            this.#hunger += 2;

            console.log('Running success!');

            return true;
        }

        console.log('Running failed.');

        return false;
    }

    static feetMultiple(...cats) {
        cats.forEach(cat => {
            cat.eat();
        });
    }

    static checkBoundaries(property) {
        return property >= 0 && property <= 10;
    }
}

const c1 = new Cat();
const c2 = new Cat();

c1.fight();

console.log(c1.getStatus());