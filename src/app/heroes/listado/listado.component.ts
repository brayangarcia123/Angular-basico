import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ["Brayan","Diego","Guillermo"];
  heroeborrado: string = "";

  borrarHeroe(){
    this.heroeborrado = this.heroes.shift() || "";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
