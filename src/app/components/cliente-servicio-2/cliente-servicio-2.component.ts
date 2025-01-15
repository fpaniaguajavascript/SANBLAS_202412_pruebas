import { Component, inject } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cliente-servicio-2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cliente-servicio-2.component.html',
  styleUrl: './cliente-servicio-2.component.css'
})
export class ClienteServicio2Component {
  public servicio = inject(ServicioService);//A partir de Angular 18
}
