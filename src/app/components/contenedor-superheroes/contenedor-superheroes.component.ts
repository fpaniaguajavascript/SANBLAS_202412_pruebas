import { Component } from '@angular/core';
import { FichaSuperheroeComponent } from "../ficha-superheroe/ficha-superheroe.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contenedor-superheroes',
  standalone: true,
  imports: [FichaSuperheroeComponent, FormsModule],
  templateUrl: './contenedor-superheroes.component.html',
  styleUrl: './contenedor-superheroes.component.css'
})
export class ContenedorSuperheroesComponent {
  nombre : string = "";
  edad : number = 0;
  imagen : string = "";
}
