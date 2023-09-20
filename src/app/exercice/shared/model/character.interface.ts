import { IArtifact } from "./artifact.interface";
import { IWeapon } from "./weapon.interface";

export interface ICharacterDTO {
  id: number;
  name: string;
  slug: string;
  description: string;
  gender: string;
  birthday: string;
  rarity: number;
  vision: string;
  weapon: string;
  obtain: string;
}
export interface ICharacterArtifacts extends ICharacterDTO {
  artifacts: IArtifact[];
}

export interface ICharacter {
  id: number;
  name: string;
  slug: string;
  description: string;
  gender: string;
  birthday: Date;
  rarity: number;
  vision: string;
  weapon: IWeapon;
  obtain: string;
}
