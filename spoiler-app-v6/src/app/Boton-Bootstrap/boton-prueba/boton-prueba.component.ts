import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton-prueba',
  templateUrl: './boton-prueba.component.html',
  styleUrls: ['./boton-prueba.component.css']
})
export class BotonPruebaComponent implements OnInit {

  claseAlert = "alert alert-primary";

  constructor() { }

  cambiarClaseColor() {
    if(this.claseAlert === "alert alert-primary") {
      this.claseAlert = "alert alert-secondary"
    } else if(this.claseAlert === "alert alert-secondary") {
      this.claseAlert = "alert alert-success"
    } else if(this.claseAlert === "alert alert-success") {
      this.claseAlert = "alert alert-danger"
    } else if(this.claseAlert === "alert alert-danger") {
      this.claseAlert = "alert alert-warning"
    } else if(this.claseAlert === "alert alert-warning") {
      this.claseAlert = "alert alert-info"
    } else if(this.claseAlert === "alert alert-info") {
      this.claseAlert = "alert alert-light"
    } else if(this.claseAlert === "alert alert-light") {
      this.claseAlert = "alert alert-dark"
    } else if(this.claseAlert === "alert alert-dark") {
      this.claseAlert = "alert alert-primary"
    }
  }

  ngOnInit() {
  }

}
