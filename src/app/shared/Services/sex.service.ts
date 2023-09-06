import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ISex, dataSex } from "../models/sex.model";

@Injectable({
  providedIn: "root",
})
export class SexService {
  constructor() {}

  public getSex(): Observable<ISex[]> {
    return of(dataSex);
  }
}
