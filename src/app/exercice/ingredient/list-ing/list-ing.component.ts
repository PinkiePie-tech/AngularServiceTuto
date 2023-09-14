import { Component, Input } from "@angular/core";
import { IRecetteProduit } from "src/app/shared/models/recette.interface";

@Component({
  selector: "app-list-ing",
  templateUrl: "./list-ing.component.html",
  styleUrls: ["./list-ing.component.css"],
})
export class ListIngComponent {
  @Input() ingInput: IRecetteProduit[] = [];

  public del(id: number) {
    this.ingInput.splice(id, 1);
    console.log(id, "id deleted");
  }
}
