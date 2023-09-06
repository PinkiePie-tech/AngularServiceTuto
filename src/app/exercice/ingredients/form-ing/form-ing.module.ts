import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormIngComponent } from "./form-ing.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [FormIngComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [FormIngComponent],
})
export class FormIngModule {}
