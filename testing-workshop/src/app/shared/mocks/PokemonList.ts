import { Pokemon } from '@interfaces/Pokemon';

export const MockPokemon: Pokemon = {
    id: 12,
    name: 'butterfree',
    base_experience: 178,
    height: 11,
    is_default: true,
    order: 16,
    weight: 320,
    sprites: {
        back_female: 'http://pokeapi.co/media/sprites/pokemon/back/female/12.png',
        back_shiny_female: 'http://pokeapi.co/media/sprites/pokemon/back/shiny/female/12.png',
        back_default: 'http://pokeapi.co/media/sprites/pokemon/back/12.png',
        front_female: 'http://pokeapi.co/media/sprites/pokemon/female/12.png',
        front_shiny_female: 'http://pokeapi.co/media/sprites/pokemon/shiny/female/12.png',
        back_shiny: 'http://pokeapi.co/media/sprites/pokemon/back/shiny/12.png',
        front_default: 'http://pokeapi.co/media/sprites/pokemon/12.png',
        front_shiny: 'http://pokeapi.co/media/sprites/pokemon/shiny/12.png',
    },
    abilities: [],
    game_indices: [
        {
            game_index: 12,
            version : {
                name: 'white-2',
                url: 'https://pokeapi.co/api/v2/version/22/'
            }
        }
    ],
    stats: [],
    moves: [],
    location_area_encounters: 'https://pokeapi.co/api/v2/pokemon/12/encounters',
};

export const MockPokemonList: Pokemon[] = [];

export const MockEncounterLocations: any[] = [];
