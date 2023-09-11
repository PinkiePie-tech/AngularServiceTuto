import { IEssence } from "./essence.model";

export interface IMoteur {
  id: number;
  cylindre: string;
  consommation: string;
  essence: IEssence;
}

export interface IMoteurDTO {
  id: number;
  cylindre: string;
  consommation: string;
  typeEssenceId: number;
}
