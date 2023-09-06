import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { IRecette } from "../models/recette.interface";

@Injectable({
  providedIn: "root",
})
export class RecettesService {
  constructor() {}

  public getRecipes(): Observable<IRecette[]> {
    return of();
  }
}
