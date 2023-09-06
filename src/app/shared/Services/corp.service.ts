import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ICorps, dataCorps } from "../models/corps.model";

@Injectable({
  providedIn: "root",
})
export class CorpService {
  constructor() {}

  public getCorps(): Observable<ICorps[]> {
    return of(dataCorps);
  }
}
