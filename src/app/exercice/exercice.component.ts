import { Component } from "@angular/core";
import { Observable, combineLatest, map, startWith, switchMap } from "rxjs";
import { IdeaService } from "../shared/Services/idea.service";
import { IIdea } from "../shared/models/idea.model";
import { FormControl, FormGroup } from "@angular/forms";
import { UserService } from "../shared/Services/user.service";
import { IUser } from "../shared/models/person.model";

@Component({
  selector: "app-exercice",
  templateUrl: "./exercice.component.html",
  styleUrls: ["./exercice.component.css"],
})
export class ExerciceComponent {
  public formgroup = new FormGroup({
    fcSelect: new FormControl<string>(""),
    fcInput: new FormControl<string>(""),
  });

  public typeIdeas$: Observable<string[]>;
  public ideas$: Observable<IIdea[]>;
  public typesFilt$: Observable<IIdea[]>;
  public ideaWithUser$: Observable<IIdea[]>;
  public users$: Observable<IUser[]>;
  public search$: Observable<IIdea[]>;

  constructor(
    private ideaService: IdeaService,
    private userService: UserService
  ) {
    this.typeIdeas$ = this.ideaService.getTypeIdeas();
    this.ideas$ = this.ideaService.getIdeas();
    this.users$ = this.userService.getUsers();

    this.typesFilt$ = this.formgroup.get("fcSelect")!.valueChanges.pipe(
      switchMap((type: string | null) => {
        return this.ideaService.getIdeasByType(type ?? "");
      })
    );

    this.ideaWithUser$ = combineLatest(this.ideas$, this.users$).pipe(
      map(([ideas, users]: [IIdea[], IUser[]]) => {
        return ideas.map((idea: IIdea) => {
          idea.user = users.find((user: IUser) => {
            return user.id === idea.idUser;
          });
          return idea;
        });
      })
    );

    this.search$ = this.formgroup.valueChanges.pipe(
      startWith(this.formgroup.getRawValue()),
      switchMap(
        (form: { fcSelect?: string | null; fcInput?: string | null }) => {
          return this.ideaWithUser$.pipe(
            map((ideas: IIdea[]) => {
              return ideas.filter((idea: IIdea) => {
                return (
                  idea.description
                    .toLocaleLowerCase()
                    .includes(form.fcInput?.toLocaleLowerCase() ?? "") ||
                  idea.title
                    .toLocaleLowerCase()
                    .includes(form.fcInput?.toLocaleLowerCase() ?? "") ||
                  idea.user?.firstName
                    .toLocaleLowerCase()
                    .includes(form.fcInput?.toLocaleLowerCase() ?? "") ||
                  idea.user?.lastName
                    .toLocaleLowerCase()
                    .includes(form.fcInput?.toLocaleLowerCase() ?? "")
                );
              });
            }),
            map((ideas: IIdea[]) => {
              return ideas.filter((idea: IIdea) => {
                if (form.fcSelect === "") {
                  return idea.typeIdea === "bonne" || idea.typeIdea === "merde";
                  // true
                }
                return idea.typeIdea === form.fcSelect;
              });
            })
          );
        }
      )
    );
  }

  public getUserName(idUser: number): Observable<IUser | undefined> {
    return this.userService.getUserById(idUser);
    // console.log(this.ideaService.getIdeasByType(type));
  }

  /**
   * J'ai 0 idée !!! mais genre cerveau vide ...
   *
   * Un exercice de mémoire serait le mieux non ? mais j'ai pas d'idée
   *
   * Du coup, vu que j'ai des idées de merdes, et quelques bonnes, voici l'exercice, faire en sorte que tu puisse te démerder tout seul cette fois.
   * Nous avons ici des idées, bonne ou mauvaise, cité par des utilisateurs différents, je souhaite donc voir la liste des idées, et la personne qui l'a écrite
   * Un petit champ de recherche qui cherche sur les idées ( nom et/ou description) et/ou utilisateurs, et filtrer sur les bonnes ou mauvaises idées
   *  */
}
