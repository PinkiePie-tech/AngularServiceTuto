import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ISerie } from "../models/serie.model";
import { dataSerie } from "../data/serie.data";

@Injectable({
  providedIn: "root",
})
export class SerieService {
  constructor() {}

  public getSerie(): Observable<ISerie[]> {
    return of(dataSerie);
  }
}
