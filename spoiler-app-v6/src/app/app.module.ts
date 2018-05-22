import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { PeliculaBannerComponent } from './Peliculas/pelicula-banner/pelicula-banner.component';
import { BotonPruebaComponent } from './Boton-Bootstrap/boton-prueba/boton-prueba.component';
import { GrillaComponent } from './grilla/grilla.component';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import { MenuInferiorComponent } from './menu-inferior/menu-inferior.component';
import { PeliculaBordeRedondoComponent } from './pelicula-borde-redondo/pelicula-borde-redondo.component';
import {ButtonModule} from "primeng/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule, MatCheckboxModule} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    PeliculaBannerComponent,
    BotonPruebaComponent,
    GrillaComponent,
    MenuSuperiorComponent,
    MenuInferiorComponent,
    PeliculaBordeRedondoComponent
  ], //Definir todos lo componentes a usarse
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    ButtonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule
  ], //Definir todos los modulos a usarse
  providers: [], //Definir todos los servicios
  bootstrap: [AppComponent]
})
export class AppModule { }
