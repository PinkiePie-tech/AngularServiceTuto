import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { BehaviorSubject, Observable, combineLatest, map, take } from "rxjs";
import { IMesure } from "src/app/shared/data/produit.data";
import { IIngredient } from "src/app/shared/models/ingredient.interface";
import { IRecetteProduit } from "src/app/shared/models/recette.interface";
import { IngredientsService } from "src/app/shared/service/ingredients.service";

@Component({
  selector: "app-form-ing",
  templateUrl: "./form-ing.component.html",
  styleUrls: ["./form-ing.component.css"],
})
export class FormIngComponent {
  public ingredients$: Observable<IIngredient[]>;
  public mesures$: Observable<IMesure[]>;
  public add$ = new BehaviorSubject<IRecetteProduit[]>([]);

  @Output() outListeIng = new EventEmitter<IRecetteProduit[]>();

  private id = 0;

  public formgroup = new FormGroup({
    ingredient: new FormControl<number>(0),
    qtt: new FormControl<number>(0),
    mesure: new FormControl<number>(0),
  });

  constructor(private ingService: IngredientsService) {
    this.ingredients$ = this.ingService.getIngredients();
    this.mesures$ = this.ingService.getMesures();
  }

  public addIngredient() {
    let recette: IRecetteProduit[] = this.add$.getValue();

    combineLatest([this.ingredients$, this.mesures$])
      .pipe(
        map(([ingredients, mesures]: [IIngredient[], IMesure[]]) => {
          let form = this.formgroup.getRawValue();
          return {
            id: this.id++,
            nbUnity: form.qtt,
            unity: mesures.find((mes: IMesure) => mes.id == form.mesure)?.name,
            ingredient: ingredients.find(
              (ing: IIngredient) => ing.id == form.ingredient
            ),
          } as IRecetteProduit;
        }),
        take(1)
      )
      .subscribe((rec: IRecetteProduit) => {
        recette.push(rec);
        this.add$.next(recette);
        this.outListeIng.emit(recette);
        console.log(recette);
      });

    //recette.push(this.formgroup.getRawValue())
  }
}
