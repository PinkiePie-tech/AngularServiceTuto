import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IngredientsComponent } from "./ingredients.component";

@NgModule({
  declarations: [IngredientsComponent],
  imports: [CommonModule],
  exports: [IngredientsComponent],
})
export class IngredientsModule {}
