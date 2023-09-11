import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class VoitureService {
  constructor() {}

  public getMarqueVoiture(): Observable<string[]> {
    return of(["Toyota", "Peugeot", "Tesla", "BMW", "Volswagen"]);
  }
}
