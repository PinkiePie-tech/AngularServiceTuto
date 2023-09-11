import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { IEssence } from "../models/essence.model";
import { dataEssence } from "../data/essence.data";

@Injectable({
  providedIn: "root",
})
export class EssenceService {
  constructor() {}

  public getEssence(): Observable<IEssence[]> {
    return of(dataEssence);
  }
}
