import { Injectable } from "@angular/core";
import { dataCharacter } from "../data/character.data";
import { Observable, map, of } from "rxjs";
import { ICharacter } from "../models/character.model";

@Injectable({
  providedIn: "root",
})
export class CharacterService {
  constructor() {}

  public getCharacter(): Observable<ICharacter[]> {
    return of(dataCharacter);
  }

  public getCharacterById(idChars: number[]): Observable<ICharacter[]> {
    return of(dataCharacter).pipe(
      map((characters: ICharacter[]) => {
        return characters.filter((character: ICharacter) => {
          return idChars.includes(character.id);
        });
      })
    );
  }
}
