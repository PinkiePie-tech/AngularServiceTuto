import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { IDevise } from "../models/devise.model";
import { dataDevise } from "../data/devise.data";

@Injectable({
  providedIn: "root",
})
export class DeviseService {
  constructor() {}

  public getDevice(): Observable<IDevise[]> {
    return of(dataDevise);
  }
}
