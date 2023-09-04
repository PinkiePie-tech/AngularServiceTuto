import { ICharacter } from "./character.model";
import { IDevise } from "./devise.model";
import { IMaterial } from "./material.model";

export interface IFigurine {
  id: number;
  name: string;
  format: string;
  idMaterial: number;
  price: IPrice;
  idCharacter: number[];
}

export interface IFigurineView {
  id: number;
  name: string;
  format: string;
  material?: IMaterial;
  price: { value: number; devise?: IDevise };
  characters: ICharacter[];
}

export interface IPrice {
  value: number;
  idDevise: number;
}
