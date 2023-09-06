import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { IHuman } from "../models/human.model";

@Injectable({
  providedIn: "root",
})
export class HumanService {
  constructor() {}
  // public getHumans():Observable<IHuman[]>{
  //   return of(dataHu)
  // }
}
