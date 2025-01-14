import { Component } from '@angular/core';

@Component({
  selector: 'app-ficha',
  standalone: true,
  imports: [],
  templateUrl: './ficha.component.html',
  styleUrl: './ficha.component.css'
})
export class FichaComponent {
  nombre : string = "Pikachu";
  power : number = 100;
  imagen : string = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png";
  imagenLocal : string = "pikachu.jpg";
}
