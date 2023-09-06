import { Injectable } from "@angular/core";
import { Observable, map, of, switchMap } from "rxjs";
import { IIngredient } from "../models/produit.interface";
import { dataIngredient } from "../data/produit.data";
import { RecettesService } from "./recettes.service";
import { IRecette } from "../models/recette.interface";

@Injectable({
  providedIn: "root",
})
export class IngredientsService {
  public recipes$: Observable<IRecette[]>;

  constructor(private recetteService: RecettesService) {
    this.recipes$ = this.recetteService.getRecipes();
  }

  public getIngredients(): Observable<IIngredient[]> {
    return of(dataIngredient);
  }

  public getIngredientsByRecipe(idRecipe: number): Observable<IIngredient[]> {
    return of(dataIngredient);
  }
}
