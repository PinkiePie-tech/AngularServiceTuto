import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ISiege } from "../models/siege.model";
import { dataSiege } from "../data/siege.data";

@Injectable({
  providedIn: "root",
})
export class SiegeService {
  constructor() {}

  public getSiege(): Observable<ISiege[]> {
    return of(dataSiege);
  }
}
