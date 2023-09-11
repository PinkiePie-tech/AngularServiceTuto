import { IMoteur } from "./moteur.model";
import { IPneu } from "./pneu.model";
import { ISiege } from "./siege.model";

export interface IVoiture {
  id: number;
  marque: "Toyota" | "Peugeot" | "Tesla" | "BMW" | "Volswagen";
  model: string;
  pneu: IPneu;
  moteur: IMoteur;
  siege: ISiege;
}

export interface IVoitureDTO {
  id?: number;
  marque?: "Toyota" | "Peugeot" | "Tesla" | "BMW" | "Volswagen";
  model?: string;
  idPneu?: number;
  idMoteur?: number;
  idSiege?: number;
}
