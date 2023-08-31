import { Injectable } from "@angular/core";
import { Observable, map, of } from "rxjs";
import { IUser } from "../models/person.model";
import { dataPerson } from "../data/person.data";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor() {}

  public getUsers(): Observable<IUser[]> {
    return of(dataPerson);
  }

  public getUserById(id: number): Observable<IUser | undefined> {
    return of(dataPerson).pipe(
      map((users: IUser[]) => {
        return users.find((user: IUser) => user.id === id);
      })
    );
  }
}
