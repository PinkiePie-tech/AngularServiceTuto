import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormRecetteComponent } from "./form-recette.component";
import { ReactiveFormsModule } from "@angular/forms";
import { ListeIngModule } from "../../ingredients/liste-ing/liste-ing.module";
import { FormIngModule } from "../../ingredients/form-ing/form-ing.module";

@NgModule({
  declarations: [FormRecetteComponent],
  imports: [CommonModule, ReactiveFormsModule, ListeIngModule, FormIngModule],
  exports: [FormRecetteComponent],
})
export class FormRecetteModule {}
