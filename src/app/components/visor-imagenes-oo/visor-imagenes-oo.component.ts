import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-visor-imagenes-oo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './visor-imagenes-oo.component.html',
  styleUrl: './visor-imagenes-oo.component.css'
})
export class VisorImagenesOoComponent {
  tituloActual : string = "";
  cuadros : Cuadro[] = [
    new Cuadro('https://content3.cdnprado.net/imagenes/Documentos/imgsem/5a/5aa9/5aa9dcdd-3e53-40bd-84f4-d5afad8cbfdd/128f9564-43a8-4ae6-8183-84c6da85cc8c.jpg', 'Amalia de Llano y Dotres, condesa de Vilches'),
    new Cuadro('https://tiendaprado.com/29619-thickbox_default/el-sueno-de-la-razon-produce-monstruos.jpg', 'El sueño de la razón produce monstruos'),
    new Cuadro('https://historia-arte.com/_/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbSI6WyJcL2FydHdvcmtcL2ltYWdlRmlsZVwvNjVlMzNhMzJlYjYxMC5qcGciLCJyZXNpemUsODAwIl19.9VXiKo1qjUIMgnSJYLf6JpnnQsY_6OgOPAHUWTTlYPU.jpg', 'Presentación de Juan de Austria al emperador Carlos V, en Yuste')];   
    
    mostrarTitulo(titulo : string) {
      this.tituloActual = titulo;
    }
}

class Cuadro {
  url : string;
  titulo : string;
  constructor(url : string, titulo : string) {
    this.url = url;
    this.titulo = titulo;
  }
}
