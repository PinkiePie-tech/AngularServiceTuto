import { IMoteur, IMoteurDTO } from "../models/moteur.model";

export const dataMoteur: IMoteurDTO[] = [
  {
    id: 1,
    cylindre: "V6",
    consommation: "5 litres",
    typeEssenceId: 1,
  },
  {
    id: 2,
    cylindre: "V56",
    consommation: "100 litres",
    typeEssenceId: 3,
  },
  {
    id: 3,
    cylindre: "V8",
    consommation: "8 litres",
    typeEssenceId: 2,
  },
  {
    id: 4,
    cylindre: "V6",
    consommation: "2 litres",
    typeEssenceId: 4,
  },
  {
    id: 5,
    cylindre: "V8",
    consommation: "4 litres",
    typeEssenceId: 4,
  },
  {
    id: 6,
    cylindre: "V8",
    consommation: "4 litres",
    typeEssenceId: 1,
  },
  {
    id: 7,
    cylindre: "V4",
    consommation: "5kW",
    typeEssenceId: 5,
  },
];
