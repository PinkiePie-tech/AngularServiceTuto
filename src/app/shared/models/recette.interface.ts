import { IIngredient } from "./produit.interface";

export interface IRecette {
  id: string;
  name: string;
  description: string;
  ingredient: IRecetteProduit[];
}

export interface IRecetteProduit {
  id: number;
  nbUnity: number | null; // désigne le nombre d'unité, si la valeur est 5, unity est 'gramme', on aura donc 5 grammes
  unity: number | null; // désigne l'unité, cuillère à soupe, gramme, litre, ml, etc
  ingredient: number | null;
}
