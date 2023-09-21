export interface IWeapon {
  id: number;
  type: string;
  rarity: number;
  attack: {
    display: number;
    raw: number;
  };
  elderseal: string;
  attributes: {};
  damageType: string;
  name: string;
  durability: [
    {
      red: number;
      orange: number;
      yellow: number;
      green: number;
      blue: number;
      white: number;
      purple: number;
    }
  ];
  slots: [];
  elements: [];
  crafting: {
    craftable: true;
    previous: string;
    branches: [number];
    craftingMaterials: [
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
    upgradeMaterials: [
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
  assets: {
    icon: string;
    image: string;
  };
}
