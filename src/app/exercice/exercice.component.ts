import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable, combineLatest, map, switchMap } from "rxjs";
import { ICat } from "../shared/models/cat.interface";
import { CatService } from "../shared/services/cat.services";

@Component({
  selector: "app-exercice",
  templateUrl: "./exercice.component.html",
  styleUrls: ["./exercice.component.css"],
})
export class ExerciceComponent {
  public fcSelect = new FormControl<number[]>([]);
  public cats$: Observable<ICat[]>;
  public catSelected$: Observable<ICat[]>;

  constructor(private CatService: CatService) {
    //EXO-1
    this.cats$ = this.CatService.getCats();
    /*this.fcSelect.valueChanges.subscribe((idCat: number | null) =>
      console.log(idCat)
    );*/
    //EXO-1
    //
    //EXO-2
    //   this.catSelected$ = this.fcSelect.valueChanges.pipe(
    //     switchMap((idCat: number | null) => {
    //       return this.CatService.getCatById(idCat as number);
    //     })
    //   );
    //   this.catSelected$.subscribe((cat: ICat | undefined) =>
    //     console.log("chat: ", cat)
    //   );
    // }
    let listeCat: ICat[] | undefined = [];

    /*this.catSelected$ = this.fcSelect.valueChanges.pipe(
    switchMap((idCat:number)=>{ 
      listeCat.push(this.CatService.getCatById(idCat as number));
      return listeCat;
    })
  )*/

    this.catSelected$ = combineLatest([
      this.fcSelect.valueChanges,
      this.cats$,
    ]).pipe(
      map(([select, liste]: [number[] | null, ICat[]]) => {
        return liste.filter((cat: ICat) => {
          return select?.find((id: number) => id === cat.id);
        });
      })
    );
    // Voir la partie service et mettre en place des mocks de donnée, une liste des data est disponible dans le fichier cat
    // une fois les services mise en place, nous allons revenir sur ce composant

    // Etape 1 : Une fois les services mise en place ( tu peux me demander de l'aide, je suis à côté de toi,
    // juste à ta gauche ), créer un select permettant de sélectionner les cats, ce select retournera pour
    // valeur l'id du cat qu'il aura sélectionné

    // Etape 2 : Créer un observable qui, en fonction de la valeur dans le select, retourne
    //le chat qui correspond à cette valeur. afficher le chat dans la partie html

    // Etape 3 : Passer le select en multiple
  }
}
