import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ], //Definir todos lo componentes a usarse
  imports: [
    BrowserModule
  ], //Definir todos los modulos a usarse
  providers: [], //Definir todos los servicios
  bootstrap: [AppComponent]
})
export class AppModule { }
