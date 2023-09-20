import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ICharacter, ICharacterDTO } from "../model/character.interface";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CharacterService {
  constructor(private http: HttpClient) {}

  public getCharacters(): Observable<ICharacterDTO[]> {
    return this.http.get<ICharacterDTO[]>(
      "https://genshinlist.com/api/characters"
    );
  }
}
