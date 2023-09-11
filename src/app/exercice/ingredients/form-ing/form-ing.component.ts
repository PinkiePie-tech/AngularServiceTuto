import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import {
  BehaviorSubject,
  Observable,
  combineLatest,
  map,
  switchMap,
} from "rxjs";
import { IIngredient, IMesure } from "src/app/shared/models/produit.interface";
import { IRecetteProduit } from "src/app/shared/models/recette.interface";
import { IngredientsService } from "src/app/shared/services/ingredients.service";

@Component({
  selector: "app-form-ing",
  templateUrl: "./form-ing.component.html",
  styleUrls: ["./form-ing.component.css"],
})
export class FormIngComponent {
  public ingredients$: Observable<IIngredient[]>;
  public mesures$: Observable<IMesure[]>;
  public tableauIngredient$: Observable<any>;

  public formgroup = new FormGroup({
    ingredient: new FormControl<number>(0),
    qtt: new FormControl<number>(0),
    mesure: new FormControl<number>(0),
  });

  public ingredientsRecette$ = new BehaviorSubject<IRecetteProduit[]>([]);

  constructor(private serviceIng: IngredientsService) {
    this.ingredients$ = this.serviceIng.getIngredients();
    this.mesures$ = this.serviceIng.getMesures();

    this.tableauIngredient$ = combineLatest([
      this.ingredientsRecette$,
      this.mesures$,
      this.ingredients$,
    ]).pipe(
      map(
        ([listes, mesures, ingredients]: [
          IRecetteProduit[],
          IMesure[],
          IIngredient[]
        ]) => {
          return listes.map((element: IRecetteProduit) => {
            return;
          });
        }
      )
    );
  }

  public addIngredient() {
    let value: IRecetteProduit[] = this.ingredientsRecette$.getValue();
    value.push({
      id: 5,
      nbUnity: this.formgroup.get("qtt")!.value,
      unity: this.formgroup.get("mesure")!.value,
      ingredient: this.formgroup.get("ingredient")!.value,
    });

    this.ingredientsRecette$.next(value);

    console.log(this.formgroup.getRawValue());
  }
}
