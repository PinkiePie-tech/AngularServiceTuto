import { Component } from "@angular/core";
import { CatService } from "../shared/services/cat.services";
import { FormControl, FormGroup } from "@angular/forms";
import { ICat } from "../shared/models/cat.interface";
import {
  Observable,
  combineLatest,
  map,
  startWith,
  switchMap,
  tap,
} from "rxjs";
import { ICatSize } from "../shared/models/catSize.interface";

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

  public categ$: Observable<string[]>;
  public catCateg$?: Observable<ICat[]>;
  public cats$: Observable<ICat[]>;
  public catsFiltered$: Observable<ICat[]>;
  public catSearch$: Observable<ICat[]>;
  public catSize$: Observable<ICatSize[]>;
  public catSize2$: Observable<ICat[]>;

  constructor(private catService: CatService) {
    this.categ$ = this.catService.getCategory();
    this.cats$ = this.catService.getCats();
    this.catSize$ = this.catService.getCatSizes();

    this.catCateg$ = this.formgroup.get("fcSelect")?.valueChanges.pipe(
      switchMap((idCateg: string | null) => {
        if (!!idCateg) {
          return this.catService.getCats().pipe(
            map((cats: ICat[]) => {
              return cats.filter((cat: ICat) => {
                //console.log("filter: ", cat.category, "select : ", idCateg);

                return cat.category === idCateg;
              });
            })
          );
        } else {
          console.log("FAILED TO SELECT");
          return this.cats$;
        }
      })
    );

    this.catsFiltered$ = this.formgroup.get("fcInput")!.valueChanges.pipe(
      switchMap((input: string | null) => {
        if (!!input) {
          return this.catService.getCats().pipe(
            map((cats: ICat[]) => {
              return cats.filter((cat: ICat) => {
                return cat.name
                  .toLocaleLowerCase()
                  .includes(input.toLocaleLowerCase());
              });
            })
          );
        } else {
          return this.cats$;
        }
      })
    );

    this.catSearch$ = this.formgroup.valueChanges.pipe(
      switchMap(
        (value: { fcInput?: string | null; fcSelect?: string | null }) => {
          return this.catService.getCats().pipe(
            map((cats: ICat[]) => {
              return cats.filter((cat: ICat) => {
                return cat.name
                  .toLocaleLowerCase()
                  .includes(value.fcInput?.toLocaleLowerCase() ?? "");
              });
            }),
            map((cats: ICat[]) => {
              return cats.filter((cat: ICat) => {
                return cat.category === value.fcSelect;
              });
            })
          );
        }
      )
    );

    this.catSize2$ = combineLatest([this.catSize$, this.catSearch$]).pipe(
      map(([listeSize, listeCatFilt]: [ICatSize[], ICat[]]) => {
        return listeCatFilt.map((cat: ICat) => {
          cat.size = listeSize.find((size: ICatSize) => {
            return size.id === cat.idSize;
          });
          return cat;
        });
      })
    );
  } // fin construc

  // Voir la partie service et mettre en place des mocks de donnée, une liste des data est disponible dans le fichier cat
  // une fois les services mise en place, nous allons revenir sur ce composant

  // Etape 1 : Une fois les services mise en place ( tu peux me demander de l'aide,
  // je suis à côté de toi, juste à ta gauche ), créer un select permettant de sélectionner
  // les categories, ce select affichera les chats qui correspondent à la catégorie

  // Etape 2 : créer un input permettant de faire une recherche dans la
  //liste, cet input se basera sur le nom de la race de chat

  // Etape 3 : Fusionner le choix de la catégorie et l'input permettant de faire la recherche

  // Etape 4 : Ajouter l'information dans l'affichage html sur la size des chats
}
