import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { IFigurine } from "../models/figurine.model";
import { dataFigurine } from "../data/figurine.data";

@Injectable({
  providedIn: "root",
})
export class FigurineService {
  constructor() {}

  getFigurines(): Observable<IFigurine[]> {
    return of(dataFigurine);
  }
}
