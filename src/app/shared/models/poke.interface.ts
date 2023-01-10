export interface IPokemon {
  name: string;
  url: string;
}

export interface IPokemonDetail {
  abilities: IAbility[];
  base_experience: number;
  forms: IPokemon[];
  game_indices: IIndice[];
  height: number;
  id: number;
  location_area_encounters: string;
  name: string;
  order: number;
  species: {
    name: string;
    url: string;
  };
  sprites: ISprite;
  stats: IPokemonStat[];
  types: IPokemonType[];
  weight: number;
}

export interface IPokemonShortDetail {
  id: number;
  name: string;
  weight: number;
  height: number;
  species: string; // correspond au nom de l'espèce
  types: string[]; // un tableau des noms de chaque type
}

export interface IPokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface IPokemonStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface IIndice {
  game_index: number;
  version: {
    name: string;
    url: string;
  };
}

export interface ISprite {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  other: {
    dream_world: {
      front_default: string;
      front_female: string;
    };
    home: {
      front_default: string;
      front_female: string;
      front_shiny: string;
      front_shiny_female: string;
    };
    'official-artwork': {
      front_default: string;
    };
  };
}

export interface IAbility {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}
