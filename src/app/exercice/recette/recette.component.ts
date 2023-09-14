import { Component } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { IRecette } from "src/app/shared/models/recette.interface";

@Component({
  selector: "app-recette",
  templateUrl: "./recette.component.html",
  styleUrls: ["./recette.component.css"],
})
export class RecetteComponent {
  public recettes$ = new BehaviorSubject<IRecette[]>([]);

  public outRecettes(recettes: IRecette[]) {
    this.recettes$.next(recettes);
  }
}
