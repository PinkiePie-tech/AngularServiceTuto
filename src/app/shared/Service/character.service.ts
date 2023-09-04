import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ICharacter } from "../models/character.model";
import { dataCharacter } from "../data/character.data";

@Injectable({
  providedIn: "root",
})
export class CharacterService {
  constructor() {}

  public getCharacter(): Observable<ICharacter[]> {
    return of(dataCharacter);
  }
}
