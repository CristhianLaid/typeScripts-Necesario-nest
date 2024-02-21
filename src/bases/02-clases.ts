import axios from "axios";
import { Move, PokeapiResponse } from "../interfaces/pokeapi-response-interface";

export class Pokemon {
    get imageUrl(): string {
        return this.id
    }

    constructor(
        public readonly id: string,
        public name: string,
    ) { };

    screm() {
        console.log(`${this.name.toUpperCase()}`)
    };

    speak() {
        console.log(`${this.name}-- ${this.name}`)
    }

    async getMoves(): Promise<Move[]> {
        const { data } = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/1')
        console.log(data.moves)
        return data.moves
    }
};

const bulbasaur = new Pokemon('1','bulbasaur');

bulbasaur.speak();

bulbasaur.screm();

bulbasaur.getMoves();

