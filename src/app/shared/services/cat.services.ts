import { Injectable } from "@angular/core";
import { Observable, map, switchMap, timer } from "rxjs";
import { ICat } from "../models/cat.interface";
import { dataCat } from "../data/cat.data";

@Injectable({
  providedIn: "root",
})
export class CatService {
  constructor() {}

  // Première étape, création d'un mock de service

  public getCats(): Observable<ICat[]> {
    /**
     * remplir cette méthode qui va nous retourner une liste de Cat, la liste est stocké aujourd'hui en local,
     * pour simuler une requête réseau, nous devons ajouter un délai de 200 ms à cette requête
     */

    return timer(200).pipe(
      map((num: number) => {
        return dataCat;
      })
    );
  }

  public getCatById(id: number | null): Observable<ICat | undefined> {
    /**
     * remplir cette méthode qui va nous retourner un Cat en fonction d'un ID, la liste est stocké aujourd'hui en local,
     * pour simuler une requête réseau, nous devons ajouter un délai de 100 ms à cette requête
     */

    return timer(100).pipe(
      map((num: number) => {
        return dataCat.find((cat: ICat) => {
          return cat.id == id;
        });
      })
    );
  }
}
