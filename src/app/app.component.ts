import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SimpleComponentComponent } from "./components/simple-component/simple-component.component";
import { FichaComponent } from "./components/ficha/ficha.component";
import { MiniformularioComponent } from "./components/miniformulario/miniformulario.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SimpleComponentComponent, FichaComponent, MiniformularioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SANBLAS_202412_pruebas';
}
