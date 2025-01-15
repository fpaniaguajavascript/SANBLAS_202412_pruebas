import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SimpleComponentComponent } from "./components/simple-component/simple-component.component";
import { FichaComponent } from "./components/ficha/ficha.component";
import { MiniformularioComponent } from "./components/miniformulario/miniformulario.component";
import { VisorImagenesComponent } from "./components/visor-imagenes/visor-imagenes.component";
import { VisorImagenesOoComponent } from "./components/visor-imagenes-oo/visor-imagenes-oo.component";
import { InputHijoComponent } from "./components/input-hijo/input-hijo.component";
import { InputPadreComponent } from "./components/input-padre/input-padre.component";
import { FichaSuperheroeComponent } from "./components/ficha-superheroe/ficha-superheroe.component";
import { ContenedorSuperheroesComponent } from "./components/contenedor-superheroes/contenedor-superheroes.component";
import { ClienteServicio1Component } from "./components/cliente-servicio-1/cliente-servicio-1.component";
import { ClienteServicio2Component } from "./components/cliente-servicio-2/cliente-servicio-2.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SimpleComponentComponent, FichaComponent, MiniformularioComponent, VisorImagenesComponent, VisorImagenesOoComponent, InputHijoComponent, InputPadreComponent, FichaSuperheroeComponent, ContenedorSuperheroesComponent, ClienteServicio1Component, ClienteServicio2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SANBLAS_202412_pruebas';
}
