interface Pokemons {
    name: string;
    type: string;
    hp: number;
    attack?: number;
    defense?: number;
}

export const pokemonIds: number[] = [20, 12, 12, 1];


export const pokemons:Pokemons[] = [{
    name: 'Bulbasaur',
    type: 'Grass',
    hp: 45,
    attack: 49,
    defense: 49,
}]