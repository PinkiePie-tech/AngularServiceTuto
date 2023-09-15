import { Component, EventEmitter, Output } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { BehaviorSubject, Observable, filter } from "rxjs";
import {
  IRecette,
  IRecetteProduit,
} from "src/app/shared/models/recette.interface";
import { IngredientsService } from "src/app/shared/service/ingredients.service";
import { RecetteService } from "src/app/shared/service/recette.service";

@Component({
  selector: "app-form-recette",
  templateUrl: "./form-recette.component.html",
  styleUrls: ["./form-recette.component.css"],
})
export class FormRecetteComponent {
  // public outIngredients = new BehaviorSubject<IRecetteProduit[]>([]);

  public recetteAdd$: BehaviorSubject<IRecette[]>;

  public formgroup = new FormGroup({
    id: new FormControl<number | undefined>(undefined),
    nomRecette: new FormControl<string | null>(""),
    instructions: new FormControl<string | null>(""),
  });

  private id: number = 1;
  //@Output() outRecettes = new EventEmitter<IRecette[]>();
  public ingBs$: BehaviorSubject<IRecetteProduit[]>;

  constructor(
    private recetteService: RecetteService,
    private ingService: IngredientsService
  ) {
    this.recetteAdd$ = this.recetteService.recetteAdd$;
    this.ingBs$ = this.ingService.addIng$;

    this.recetteService.editRecette$
      .pipe(filter((val: IRecette | undefined) => !!val))
      .subscribe((rec: IRecette | undefined) => {
        this.formgroup.patchValue({
          id: rec?.id,
          nomRecette: rec?.name,
          instructions: rec?.description,
        });
      });
  }

  public outIng(rec: IRecetteProduit[]) {
    // console.log("recette", rec);
    this.ingBs$.next(rec);
  }
  public addRecette() {
    let recette: IRecette[] = this.recetteAdd$.getValue();
    let form = this.formgroup.getRawValue();

    recette.push({
      id: this.id++,
      name: form.nomRecette,
      description: form.instructions,
      ingredient: [...this.ingBs$.getValue()],
    } as IRecette);

    this.recetteAdd$.next(recette);
    //this.outRecettes.emit(recette);

    console.log("add recette:", this.recetteAdd$.getValue());
  }

  public reset() {
    this.formgroup.reset();
    this.ingService.reset$.next();
  }
}
