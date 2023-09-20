import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ExerciceComponent } from "./exercice.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [ExerciceComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ExerciceComponent],
})
export class ExerciceModule {}
