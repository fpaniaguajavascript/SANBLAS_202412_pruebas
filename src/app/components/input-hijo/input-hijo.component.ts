import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-hijo',
  standalone: true,
  imports: [],
  templateUrl: './input-hijo.component.html',
  styleUrl: './input-hijo.component.css'
})
export class InputHijoComponent {
  @Input() titulo : string = "";
  @Input() director : string = "";
}
