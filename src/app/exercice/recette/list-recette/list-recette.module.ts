import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListRecetteComponent } from "./list-recette.component";

@NgModule({
  declarations: [ListRecetteComponent],
  imports: [CommonModule],
  exports: [ListRecetteComponent],
})
export class ListRecetteModule {}
