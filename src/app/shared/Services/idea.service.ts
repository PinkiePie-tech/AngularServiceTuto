import { Injectable } from "@angular/core";
import { Observable, map, of, switchMap } from "rxjs";
import { IIdea } from "../models/idea.model";
import { dataIdea } from "../data/idea.data";
import { UserService } from "./user.service";
import { IUser } from "../models/person.model";

@Injectable({
  providedIn: "root",
})
export class IdeaService {
  constructor(private userService: UserService) {}

  public getIdeas(): Observable<IIdea[]> {
    return of(dataIdea);
  }
  public getIdeasByType(type: string): Observable<IIdea[]> {
    return of(dataIdea).pipe(
      map((ideas: IIdea[]) => {
        return ideas.filter((idea: IIdea) => {
          return idea.typeIdea === type;
        });
      })
    );
  }

  public getGoodIdeas(): Observable<IIdea[]> {
    return of(dataIdea).pipe(
      map((ideas: IIdea[]) => {
        return ideas.filter((idea: IIdea) => {
          return idea.typeIdea === "bonne";
        });
      })
    );
  }

  public getBadIdeas(): Observable<IIdea[]> {
    return of(dataIdea).pipe(
      map((ideas: IIdea[]) => {
        return ideas.filter((idea: IIdea) => {
          return idea.typeIdea === "merde";
        });
      })
    );
  }

  public getTypeIdeas(): Observable<string[]> {
    //GALERE
    let types: string[] = [];

    return of(dataIdea).pipe(
      map((ideas: IIdea[]) => {
        ideas.forEach((idea: IIdea) => {
          if (!types.includes(idea.typeIdea)) {
            types.push(idea.typeIdea);
          }
          return types;
        });
        //return Array.from(new Set(ideas.map(idea => idea.typeIdea)))

        return types;
      })
    );
  }

  public getIdeasByUser(): Observable<IIdea[]> {
    return of(dataIdea).pipe(
      switchMap((ideas: IIdea[]) => {
        return this.userService.getUsers().pipe(
          map((users: IUser[]) => {
            return ideas.filter((idea: IIdea) => {
              return users.find((user: IUser) => {
                return user.id === idea.idUser;
              });
            });
          })
        );
      })
    );
  }
}
