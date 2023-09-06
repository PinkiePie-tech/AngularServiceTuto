import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { IFinger, dataDoigt } from "../models/finger.model";

@Injectable({
  providedIn: "root",
})
export class FingerService {
  constructor() {}
  public getFingers(): Observable<IFinger[]> {
    return of(dataDoigt);
  }
}
