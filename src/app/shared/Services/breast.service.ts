import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { IBreast, dataBreast } from "../models/breast.model";

@Injectable({
  providedIn: "root",
})
export class BreastService {
  constructor() {}

  public getBreast(): Observable<IBreast[]> {
    return of(dataBreast);
  }
}
