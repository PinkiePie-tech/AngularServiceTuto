import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { IFoot, dataFoot } from "../models/foot.model";

@Injectable({
  providedIn: "root",
})
export class FootService {
  constructor() {}

  public getFoot(): Observable<IFoot[]> {
    return of(dataFoot);
  }
}
