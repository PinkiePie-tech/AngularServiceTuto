import { Component, Input } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IRecette } from "src/app/shared/models/recette.interface";

@Component({
  selector: "app-list-recette",
  templateUrl: "./list-recette.component.html",
  styleUrls: ["./list-recette.component.css"],
})
export class ListRecetteComponent {
  @Input() inRecettes!: BehaviorSubject<IRecette[]>;
}
