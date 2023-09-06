import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RecettesComponent } from "./recettes.component";
import { FormRecetteModule } from "./form-recette/form-recette.module";
import { ListeRecettesModule } from "./liste-recettes/liste-recettes.module";
import { FormIngModule } from "../ingredients/form-ing/form-ing.module";

@NgModule({
  declarations: [RecettesComponent],
  imports: [
    CommonModule,
    FormRecetteModule,
    ListeRecettesModule,
    FormIngModule,
  ],
  exports: [RecettesComponent],
})
export class RecettesModule {}
