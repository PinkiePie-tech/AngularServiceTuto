import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ExerciceComponent } from "./exercice.component";
import { RecetteModule } from "./recette/recette.module";
import { FormRecetteModule } from "./recette/form-recette/form-recette.module";

@NgModule({
  declarations: [ExerciceComponent],
  imports: [CommonModule, RecetteModule],
  exports: [ExerciceComponent],
})
export class ExerciceModule {}
