import { Component } from "@angular/core";


@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html'
})
export class HeroeComponent{

  nombre: string = "Spiderman";
  edad: number = 25;

  get capitalizando(): string{
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string{
    return this.nombre + " - " + this.edad;
  }

  cambiarHeroe(): void{
    this.nombre = "Brayan";
  }

  cambiaredad(): void{
    this.edad = 30;
  }

}
