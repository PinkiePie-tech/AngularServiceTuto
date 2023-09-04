import { Injectable } from "@angular/core";
import { Observable, map, of } from "rxjs";
import { IMaterial } from "../models/material.model";
import { dataMaterial } from "../data/material.data";

@Injectable({
  providedIn: "root",
})
export class MaterialService {
  constructor() {}

  public getMaterial(): Observable<IMaterial[]> {
    return of(dataMaterial);
  }

  public getMaterialByID(idMat: number): Observable<IMaterial | undefined> {
    return of(dataMaterial).pipe(
      map((mats: IMaterial[]) => {
        return mats.find((mat: IMaterial) => {
          return mat.id === idMat;
        });
      })
    );
  }
}
