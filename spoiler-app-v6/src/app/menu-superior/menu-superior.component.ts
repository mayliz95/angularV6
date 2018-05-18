import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-superior',
  templateUrl: './menu-superior.component.html',
  styleUrls: ['./menu-superior.component.css']
})
export class MenuSuperiorComponent implements OnInit {

  itemsMenuSuperior = ["Música", "Audio Latino", "Ver los Simpsons", "Facebook", "Twitter", "Ingresar"];
  //itemMenuSuperior = "Musica";
  constructor() { }

  ngOnInit() {
  }

}
