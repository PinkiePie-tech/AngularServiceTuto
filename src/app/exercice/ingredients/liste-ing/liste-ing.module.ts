import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListeIngComponent } from "./liste-ing.component";

@NgModule({
  declarations: [ListeIngComponent],
  imports: [CommonModule, ListeIngModule],
  exports: [ListeIngComponent],
})
export class ListeIngModule {}
