import { ISerie } from "./serie.model";

export interface ICharacter {
  id: number;
  name: string;
  serie: ISerie;
}
