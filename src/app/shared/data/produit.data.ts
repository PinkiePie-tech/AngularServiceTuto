import { IIngredient } from "../models/ingredient.interface";

export const dataIngredient: IIngredient[] = [
  {
    id: 1,
    name: "Pomme",
  },
  {
    id: 2,
    name: "Poire",
  },
  {
    id: 3,
    name: "Beurre",
  },
  {
    id: 4,
    name: "Banane",
  },
  {
    id: 5,
    name: "Nutella",
  },
  {
    id: 6,
    name: "Chocapic",
  },
  {
    id: 7,
    name: "Gingembre",
  },
  {
    id: 8,
    name: "Fraise",
  },
  {
    id: 9,
    name: "Farine",
  },
  {
    id: 10,
    name: "Sel",
  },
  {
    id: 11,
    name: "Sucre",
  },
  {
    id: 12,
    name: "Poivre",
  },
];

export interface IMesure {
  id: number;
  name: string;
  symbol: string;
}
