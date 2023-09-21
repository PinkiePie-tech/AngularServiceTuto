import { Injectable } from "@angular/core";
import { IMonster } from "../model/monster.interface";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MonstersService {
  constructor(private http: HttpClient) {}

  public getMonsters(): Observable<IMonster[]> {
    return this.http.get<IMonster[]>("https://mhw-db.com/fr/monsters");
  }
}
