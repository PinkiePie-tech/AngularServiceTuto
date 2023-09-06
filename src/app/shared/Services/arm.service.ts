import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { IArm, dataArm } from "../models/arm.model";
import { dataLeg } from "../models/leg.model";

@Injectable({
  providedIn: "root",
})
export class ArmService {
  constructor() {}

  public getArm(): Observable<IArm[]> {
    return of(dataArm);
  }
}
