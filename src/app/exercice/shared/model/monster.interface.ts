export interface IMonster {
  id: number;
  type: string;
  species: string;
  elements: [];
  name: string;
  description: string;
  ailments: [];
  locations: [
    {
      id: number;
      zoneCount: number;
      name: string;
    }
  ];
  resistances: [];
  weaknesses: [
    {
      element: string;
      stars: number;
      condition: string;
    }
  ];
  rewards: [
    {
      id: number;
      item: {
        id: number;
        rarity: number;
        carryLimit: number;
        value: number;
        name: string;
        description: string;
      };
      conditions: [
        {
          type: string;
          rank: string;
          quantity: number;
          chance: number;
          subtype: string;
        }
      ];
    }
  ];
}
