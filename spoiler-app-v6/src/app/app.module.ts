import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { PeliculaBannerComponent } from './Peliculas/pelicula-banner/pelicula-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    PeliculaBannerComponent
  ], //Definir todos lo componentes a usarse
  imports: [
    BrowserModule,
    FormsModule
  ], //Definir todos los modulos a usarse
  providers: [], //Definir todos los servicios
  bootstrap: [AppComponent]
})
export class AppModule { }
