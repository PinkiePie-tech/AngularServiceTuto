import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListeRecettesComponent } from "./liste-recettes.component";

@NgModule({
  declarations: [ListeRecettesComponent],
  imports: [CommonModule],
  exports: [ListeRecettesComponent],
})
export class ListeRecettesModule {}
