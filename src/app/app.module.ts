import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { ExerciceModule } from './exercice/exercice.module';
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, CoreModule, ExerciceModule],
  declarations: [AppComponent, RxjsComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
