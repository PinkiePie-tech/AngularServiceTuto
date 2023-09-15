import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IRecette } from "../models/recette.interface";

@Injectable({
  providedIn: "root",
})
export class RecetteService {
  public recetteAdd$ = new BehaviorSubject<IRecette[]>([]);
  public editRecette$ = new BehaviorSubject<IRecette | undefined>(undefined);

  constructor() {}
}
