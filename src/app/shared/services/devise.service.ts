import { Injectable } from "@angular/core";
import { Observable, map, of, timer } from "rxjs";
import { dataCourses, dataDevise } from "../data/course.data";
import { ICourse } from "../models/course.interface";
import { IDevise } from "../models/devise.interface";

@Injectable({
  providedIn: "root",
})
export class DeviseService {
  constructor() {}

  // Première étape, création d'un mock de service, je ne donne pas cette fois si le nom des services,
  // à toi de créer ceux dont tu auras besoin et que tu jugera nécessaire

  public getDevises(): Observable<IDevise[]> {
    return of(dataDevise);
  }

  public getDeviseByID(id: number | null): Observable<IDevise | undefined> {
    return of(dataDevise).pipe(
      map((devises: IDevise[]) => {
        return devises.find((devise: IDevise) => {
          return devise.id == id;
          //return devise.symbol;
        });
      })
    );
  }
}
