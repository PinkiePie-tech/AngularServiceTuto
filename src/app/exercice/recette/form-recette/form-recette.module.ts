import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormRecetteComponent } from "./form-recette.component";
import { ReactiveFormsModule } from "@angular/forms";
import { FormIngModule } from "../../ingredient/form-ing/form-ing.module";

@NgModule({
  declarations: [FormRecetteComponent],
  imports: [CommonModule, ReactiveFormsModule, FormIngModule],
  exports: [FormRecetteComponent],
})
export class FormRecetteModule {}
