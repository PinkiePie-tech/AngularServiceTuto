import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ExerciceComponent } from "./exercice.component";
import { RecettesModule } from "./recettes/recettes.module";
import { IngredientsModule } from "./ingredients/ingredients.module";

@NgModule({
  declarations: [ExerciceComponent],
  imports: [CommonModule, RecettesModule, IngredientsModule],
  exports: [ExerciceComponent],
})
export class ExerciceModule {}
