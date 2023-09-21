export interface IArmor {
  id: number;
  type: string;
  rank: string;
  rarity: number;
  defense: {
    base: number;
    max: number;
    augmented: number;
  };
  resistances: {
    fire: number;
    water: number;
    ice: number;
    thunder: number;
    dragon: number;
  };
  attributes: {
    requiredGender: string;
  };
  name: string;
  slots: [
    {
      rank: number;
    }
  ];
  skills: [
    {
      id: number;
      level: number;
      modifiers: {};
      description: string;
      skill: number;
      skillName: string;
    }
  ];
  armorSet: {
    id: number;
    rank: string;
    name: null;
    pieces: number[];
    bonus: null;
  };
  assets: {
    imageMale: string;
    imageFemale: string;
  };
  crafting: {
    materials: [
      {
        quantity: number;
        item: {
          id: number;
          rarity: number;
          carryLimit: number;
          value: number;
          name: string;
          description: string;
        };
      }
    ];
  };
}
