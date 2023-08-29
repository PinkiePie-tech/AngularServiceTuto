import { Injectable } from "@angular/core";
import { dataCat, dataCatSize } from "../data/cat.data";
import { Observable, map, of, timer } from "rxjs";
import { ICat } from "../models/cat.interface";
import { ICatSize } from "../models/catSize.interface";

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
      map((timer: number) => {
        return dataCat;
      })
    );
  }

  public getCatById(id: number): Observable<ICat | undefined> {
    /**
     * remplir cette méthode qui va nous retourner un Cat en fonction d'un ID, la liste est stocké aujourd'hui en local,
     * pour simuler une requête réseau, nous devons ajouter un délai de 100 ms à cette requête
     */
    return timer(100).pipe(
      map((timer: number) => {
        return dataCat.find((cat: ICat) => {
          return cat.id === id;
        });
      })
    );
  }

  public getCatSizes(): Observable<ICatSize[]> {
    /**
     * remplir cette méthode qui va nous retourner une liste de CatSize, la liste est stocké aujourd'hui en local,
     * pour simuler une requête réseau, nous devons ajouter un délai de 200 ms à cette requête
     */

    return timer(200).pipe(
      map((timer: number) => {
        return dataCatSize;
      })
    );
  }

  public getCatSizesById(id: number): Observable<ICatSize | undefined> {
    /**
     * remplir cette méthode qui va nous retourner un CatSize en fonction d'un ID, la liste est stocké aujourd'hui en local,
     * pour simuler une requête réseau, nous devons ajouter un délai de 100 ms à cette requête
     */
    return timer(200).pipe(
      map((timer: number) => {
        return dataCatSize.find((size: ICatSize) => {
          return size.id === id;
        });
      })
    );
  }

  public getCategory(): Observable<string[]> {
    return of(["A", "B", "C"]);
  }
}
