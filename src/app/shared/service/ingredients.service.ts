import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { IIngredient } from "../models/ingredient.interface";
import { IMesure, dataIngredient } from "../data/produit.data";
import { dataMesure } from "../data/mesure.data";

@Injectable({
  providedIn: "root",
})
export class IngredientsService {
  constructor() {}

  public getIngredients(): Observable<IIngredient[]> {
    return of(dataIngredient);
  }
  public getMesures(): Observable<IMesure[]> {
    return of(dataMesure);
  }
}
