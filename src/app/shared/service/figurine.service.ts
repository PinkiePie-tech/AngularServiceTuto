import { Injectable } from "@angular/core";
import { dataFigurine } from "../data/figurine.data";
import { Observable, of } from "rxjs";
import { IFigurine } from "../models/figurine.model";

@Injectable({
  providedIn: "root",
})
export class FigurineService {
  constructor() {}

  public getFigurine(): Observable<IFigurine[]> {
    return of(dataFigurine);
  }
}
