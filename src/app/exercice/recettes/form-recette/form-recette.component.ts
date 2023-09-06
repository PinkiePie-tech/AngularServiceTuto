import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-form-recette",
  templateUrl: "./form-recette.component.html",
  styleUrls: ["./form-recette.component.css"],
})
export class FormRecetteComponent {
  public formgroup = new FormGroup({
    nomRecette: new FormControl<string>(""),
    instructions: new FormControl<string>(""),
  });
}
