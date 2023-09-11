import { Injectable } from "@angular/core";
import { Observable, map, of } from "rxjs";
import { IPneu } from "../models/pneu.model";
import { dataPneu } from "../data/pneu.data";

@Injectable({
  providedIn: "root",
})
export class PneuService {
  constructor() {}

  public getPneu(): Observable<IPneu[]> {
    return of(dataPneu);
  }
}
