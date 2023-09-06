import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { IHand, dataHand } from "../models/hand.model";

@Injectable({
  providedIn: "root",
})
export class HandService {
  constructor() {}

  public getHands(): Observable<IHand[]> {
    return of(dataHand);
  }
}
