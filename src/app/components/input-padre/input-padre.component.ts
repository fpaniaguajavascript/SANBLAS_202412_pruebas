import { Component } from '@angular/core';
import { InputHijoComponent } from "../input-hijo/input-hijo.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-padre',
  standalone: true,
  imports: [InputHijoComponent, FormsModule],
  templateUrl: './input-padre.component.html',
  styleUrl: './input-padre.component.css'
})
export class InputPadreComponent {
  tituloOriginal : string = "";
  directorOriginal : string = "";
}
