export interface IPokemon {
  name: string;
  url: string;
}

export interface IAbility {
  name: string;
  url: string;
}
export interface IType {
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
    "official-artwork": {
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

export interface IPokeList {
  count: number;
  next: string;
  previous: string;
  results: IPokemon[];
}

export interface ITypeList {
  count: number;
  next: string;
  previous: string;
  results: IType[];
}

export interface IAbilityList {
  count: number;
  next: string;
  previous: string;
  results: IAbility[];
}

export interface IAbilityDetail {
  effect_changes: IEffectChange[];
  effect_entries: IEffect[];
  flavor_text_entries: IFlavorText[];
  generation: {
    name: string;
    url: string;
  };
  id: number;
  is_main_series: boolean;
  name: string;
  names: IAbilityName[];
  pokemon: IAbilityPokemon[];
}

export interface IEffect {
  effect: string;
  language: {
    name: string;
    url: string;
  };
  short_effect?: string;
}

export interface IEffectChange {
  effect_entries: IEffect[];
  version_group: {
    name: string;
    url: string;
  };
}

export interface IFlavorText {
  flavor_text: string;
  language: {
    name: string;
    url: string;
  };
  version_group: {
    name: string;
    url: string;
  };
}

export interface IAbilityPokemon {
  is_hidden: boolean;
  pokemon: IPokemon;
  slot: number;
}

export interface IAbilityName {
  language: {
    name: string;
    url: string;
  };
  name: string;
}
export interface ITypeDetail {
  damage_relations: {
    double_damage_from: {
      name: string;
      url: string;
    }[];
    double_damage_to: {
      name: string;
      url: string;
    }[];
    half_damage_from: {
      name: string;
      url: string;
    }[];
    half_damage_to: {
      name: string;
      url: string;
    }[];
    no_damage_from: {
      name: string;
      url: string;
    }[];
    no_damage_to: {
      name: string;
      url: string;
    }[];
  };
  game_indices: {
    game_index: number;
    generation: {
      name: string;
      url: string;
    };
  }[];
  generation: {
    name: string;
    url: string;
  };
  id: number;
  move_damage_class: {
    name: string;
    url: string;
  };
  moves: { name: string; url: string }[];
  name: string;
  names: {
    language: {
      name: string;
      urm: string;
    };
    name: string;
  }[];
  past_damage_relations: [];
  pokemon: {
    pokemon: IPokemon;
    slot: number;
  }[];
}
