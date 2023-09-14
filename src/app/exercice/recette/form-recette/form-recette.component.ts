import { Component, EventEmitter, Output } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { BehaviorSubject, Observable } from "rxjs";
import {
  IRecette,
  IRecetteProduit,
} from "src/app/shared/models/recette.interface";

@Component({
  selector: "app-form-recette",
  templateUrl: "./form-recette.component.html",
  styleUrls: ["./form-recette.component.css"],
})
export class FormRecetteComponent {
  public recetteAdd$ = new BehaviorSubject<IRecette[]>([]);
  public outIngredients = new BehaviorSubject<IRecetteProduit[]>([]);

  public formgroup = new FormGroup({
    nomRecette: new FormControl<string | null>(""),
    instructions: new FormControl<string | null>(""),
  });

  private id: number = 0;
  @Output() outRecettes = new EventEmitter<IRecette[]>();

  constructor() {}

  public outIng(rec: IRecetteProduit[]) {
    // console.log("recette", rec);
    this.outIngredients.next(rec);
  }
  public addRecette() {
    let recette: IRecette[] = this.recetteAdd$.getValue();
    let form = this.formgroup.getRawValue();

    recette.push({
      id: this.id++,
      name: form.nomRecette,
      description: form.instructions,
      ingredient: this.outIngredients.getValue(),
    } as IRecette);

    this.recetteAdd$.next(recette);
    this.outRecettes.emit(recette);

    console.log("add recette:", this.recetteAdd$.getValue());
  }
}
