interface Sprite {
    back_female: string;
    back_shiny_female: string;
    back_default: string;
    front_female: string;
    front_shiny_female: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
}

export interface Pokemon {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    sprites: Sprite;
    abilities: any[];
    game_indices: any[];
    stats: any[];
    moves: any[];
    location_area_encounters?: string;
}

export interface ShortPokemonType {
    name: string;
    url: string;
}

export interface PokemonResponse {
    count: number;
    next: string;
    previous: string;
    results: ShortPokemonType[];
}
