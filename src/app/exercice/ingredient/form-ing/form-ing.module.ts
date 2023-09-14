import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormIngComponent } from "./form-ing.component";
import { ReactiveFormsModule } from "@angular/forms";
import { ListIngModule } from "../list-ing/list-ing.module";

@NgModule({
  declarations: [FormIngComponent],
  imports: [CommonModule, ReactiveFormsModule, ListIngModule],
  exports: [FormIngComponent],
})
export class FormIngModule {}
