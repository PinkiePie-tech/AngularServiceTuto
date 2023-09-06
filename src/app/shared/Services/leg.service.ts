import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ILeg, dataLeg } from "../models/leg.model";

@Injectable({
  providedIn: "root",
})
export class LegService {
  constructor() {}

  public getLegs(): Observable<ILeg[]> {
    return of(dataLeg);
  }
}
