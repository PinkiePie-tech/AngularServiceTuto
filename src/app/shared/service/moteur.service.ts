import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { IMoteur, IMoteurDTO } from "../models/moteur.model";
import { dataMoteur } from "../data/moteur.data";

@Injectable({
  providedIn: "root",
})
export class MoteurService {
  constructor() {}

  public getMoteur(): Observable<IMoteurDTO[]> {
    return of(dataMoteur);
  }
}
