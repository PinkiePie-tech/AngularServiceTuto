import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { dataDevise } from "../data/devise.data";
import { IDevise } from "../models/devise.model";

@Injectable({
  providedIn: "root",
})
export class DeviseService {
  constructor() {}

  public getDevise(): Observable<IDevise[]> {
    return of(dataDevise);
  }
}
