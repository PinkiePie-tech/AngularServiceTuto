import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, CoreModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
