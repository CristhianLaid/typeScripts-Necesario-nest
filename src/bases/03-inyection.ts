import { Move, PokeapiResponse  } from "../interfaces/pokeapi-response-interface";
import { HttpAdpater, PokeapiAdapter } from "../api/pokeapi.adapter";

export class Pokemon {
    get imageUrl(): string {
        return this.id
    }

    constructor(
        public readonly id: string,
        public name: string,
        private readonly http: HttpAdpater,
    ) { };

    screm() {
        console.log(`${this.name.toUpperCase()}`)
    };

    speak() {
        console.log(`${this.name}-- ${this.name}`)
    }

    async getMoves(): Promise<Move[]> {
        const data = await this.http.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/1')
        console.log(data.moves)
        return data.moves
    }
};

const pokeapiAxios = new PokeapiAdapter();

const bulbasaur = new Pokemon('1','bulbasaur', pokeapiAxios);

bulbasaur.speak();

bulbasaur.screm();

bulbasaur.getMoves();