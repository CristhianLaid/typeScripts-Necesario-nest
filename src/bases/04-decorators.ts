
class NewPokemon {
    constructor(
        public readonly id:number,
        public name: string,
    ){};

    screm() {
        console.log(`I NOT WANT`)
    };

    speak() {
        console.log(`NOOOOOOO`)
    };
}


function Mydecorator(){
    return function(target: Function) {
        return NewPokemon
    };
};


@Mydecorator()
export class Pokemon {
    constructor(
        public readonly id: number,
        public name: string
    ){};

    screm() {
        console.log(`${this.name.toUpperCase()}!!`)
    };

    speak() {
        console.log(`${this.name}-- ${this.name}`)
    };

};

const chamander = new Pokemon(1, 'Chamander');

chamander.speak();

chamander.screm();