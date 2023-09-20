import { ICharacter, ICharacterDTO } from "./character.interface";

export interface IWeapon {
  id: number;
  name: string;
  slug: string;
  rarity: string;
  atk: number;
  obtain: string;
  type: string;
}

export interface ICharByWeapon {
  id: number;
  char?: ICharacterDTO[];
  weap?: IWeapon;
}
