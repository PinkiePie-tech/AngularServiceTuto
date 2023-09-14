import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RecetteComponent } from "./recette.component";
import { FormRecetteModule } from "./form-recette/form-recette.module";
import { ListRecetteModule } from "./list-recette/list-recette.module";

@NgModule({
  declarations: [RecetteComponent],
  exports: [RecetteComponent],
  imports: [CommonModule, FormRecetteModule, ListRecetteModule],
})
export class RecetteModule {}
