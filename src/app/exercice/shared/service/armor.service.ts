import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IArmor } from "../model/armor.interface";

@Injectable({
  providedIn: "root",
})
export class ArmorService {
  constructor(private http: HttpClient) {}

  public getArmors(): Observable<IArmor[]> {
    return this.http.get<IArmor[]>("https://mhw-db.com/armor");
  }
}
