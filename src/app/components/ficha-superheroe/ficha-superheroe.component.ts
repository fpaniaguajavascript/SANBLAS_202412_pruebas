import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ficha-superheroe',
  standalone: true,
  imports: [],
  templateUrl: './ficha-superheroe.component.html',
  styleUrl: './ficha-superheroe.component.css'
})
export class FichaSuperheroeComponent {
  @Input() nombre : string = '';
  @Input() edad : number = 0;
  @Input() url : string = '';
}
