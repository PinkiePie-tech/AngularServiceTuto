import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IWeapon } from "../model/weapon.interface";

@Injectable({
  providedIn: "root",
})
export class WeaponsService {
  constructor(private http: HttpClient) {}

  public getWeapons(): Observable<IWeapon[]> {
    return this.http.get<IWeapon[]>("https://mhw-db.com/monsters");
  }
}
