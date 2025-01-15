import { Component } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cliente-servicio-1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cliente-servicio-1.component.html',
  styleUrl: './cliente-servicio-1.component.css'
})
export class ClienteServicio1Component {
  tarea : string  = "";
  constructor (private servicio: ServicioService) { }
  agregarTarea() {
    this.servicio.addTarea(this.tarea);
    this.tarea = "";
  }
}
