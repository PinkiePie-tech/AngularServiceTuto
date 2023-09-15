import { Component, Input } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IRecette } from "src/app/shared/models/recette.interface";
import { IngredientsService } from "src/app/shared/service/ingredients.service";
import { RecetteService } from "src/app/shared/service/recette.service";

@Component({
  selector: "app-list-recette",
  templateUrl: "./list-recette.component.html",
  styleUrls: ["./list-recette.component.css"],
})
export class ListRecetteComponent {
  //@Input() inRecettes!: BehaviorSubject<IRecette[]>;
  recettesBs$: BehaviorSubject<IRecette[]>;

  constructor(
    private recetteService: RecetteService,
    private ingService: IngredientsService
  ) {
    this.recettesBs$ = this.recetteService.recetteAdd$;
  }

  public del(id: number | undefined) {
    let recettes: IRecette[] = this.recettesBs$.getValue();

    if (id != undefined) {
      console.log(id, "deleted");

      recettes.splice(id, 1);
      this.recettesBs$.next(recettes);

      //this.recettesBs$.getValue().splice(id, 1);
    }
  }

  public edit(rec: IRecette | undefined) {
    this.recetteService.editRecette$.next(rec);
  }
}
