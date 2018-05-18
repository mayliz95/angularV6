import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-inferior',
  templateUrl: './menu-inferior.component.html',
  styleUrls: ['./menu-inferior.component.css']
})
export class MenuInferiorComponent implements OnInit {

  itemsMenuInferior = ["Home", "Estrenos", "Series", "DMCA", "Decargas", "Buscar"];
  constructor() { }

  ngOnInit() {
  }

}
