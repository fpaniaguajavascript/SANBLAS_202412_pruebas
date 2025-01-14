import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-miniformulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './miniformulario.component.html',
  styleUrl: './miniformulario.component.css'
})
export class MiniformularioComponent {
  nombre : string | undefined;
  asignarNombre(){
    this.nombre = 'Pikachu';
  }
}