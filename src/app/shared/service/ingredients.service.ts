import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { IIngredient } from "../models/ingredient.interface";
import { IMesure, dataIngredient } from "../data/produit.data";
import { dataMesure } from "../data/mesure.data";
import { IRecetteProduit } from "../models/recette.interface";

@Injectable({
  providedIn: "root",
})
export class IngredientsService {
  public addIng$ = new BehaviorSubject<IRecetteProduit[]>([]);
  public reset$ = new BehaviorSubject<void>(undefined);

  constructor() {}

  public getIngredients(): Observable<IIngredient[]> {
    return of(dataIngredient);
  }
  public getMesures(): Observable<IMesure[]> {
    return of(dataMesure);
  }
}
