import { Injectable } from "@angular/core";
import { dataMaterial } from "../data/material.data";
import { Observable, map, of } from "rxjs";
import { IMaterial } from "../models/material.model";

@Injectable({
  providedIn: "root",
})
export class MaterialService {
  constructor() {}

  public getMateriel(): Observable<IMaterial[]> {
    return of(dataMaterial);
  }

  public getMaterialByID(idMaterial: number[]) {
    return of(dataMaterial).pipe(
      map((material: IMaterial[]) => {
        return material.find((material: IMaterial) => {
          return idMaterial.forEach((id: number) => {
            //Pour chaque id de materials en variable, trouvez ceux correspondant
            return material.id === id;
          });
        });
      })
    );
  }
}
