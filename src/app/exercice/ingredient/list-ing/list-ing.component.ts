import { Component, Input } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IRecetteProduit } from "src/app/shared/models/recette.interface";
import { IngredientsService } from "src/app/shared/service/ingredients.service";

@Component({
  selector: "app-list-ing",
  templateUrl: "./list-ing.component.html",
  styleUrls: ["./list-ing.component.css"],
})
export class ListIngComponent {
  //@Input() ingInput: IRecetteProduit[] = [];
  public ingBs$: BehaviorSubject<IRecetteProduit[]>;

  constructor(private ingService: IngredientsService) {
    this.ingBs$ = this.ingService.addIng$;
  }

  public del(id: number) {
    this.ingBs$.getValue().splice(id, 1);
    console.log(id, "id deleted");
  }
}
