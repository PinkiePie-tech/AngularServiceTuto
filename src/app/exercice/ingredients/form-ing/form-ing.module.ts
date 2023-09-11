import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormIngComponent } from "./form-ing.component";
import { ReactiveFormsModule } from "@angular/forms";
import { ListeIngModule } from "../liste-ing/liste-ing.module";

@NgModule({
  declarations: [FormIngComponent],
  imports: [CommonModule, ReactiveFormsModule, ListeIngModule],
  exports: [FormIngComponent],
})
export class FormIngModule {}
