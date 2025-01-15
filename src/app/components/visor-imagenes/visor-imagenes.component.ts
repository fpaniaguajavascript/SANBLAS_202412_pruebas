import { Component } from '@angular/core';

@Component({
  selector: 'app-visor-imagenes',
  standalone: true,
  imports: [],
  templateUrl: './visor-imagenes.component.html',
  styleUrl: './visor-imagenes.component.css'
})
export class VisorImagenesComponent {
  urlImagen1: string = "https://content3.cdnprado.net/imagenes/Documentos/imgsem/5a/5aa9/5aa9dcdd-3e53-40bd-84f4-d5afad8cbfdd/128f9564-43a8-4ae6-8183-84c6da85cc8c.jpg";
  urlImagen2: string = "https://tiendaprado.com/29619-thickbox_default/el-sueno-de-la-razon-produce-monstruos.jpg";
  urlImagen3: string = "https://historia-arte.com/_/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbSI6WyJcL2FydHdvcmtcL2ltYWdlRmlsZVwvNjVlMzNhMzJlYjYxMC5qcGciLCJyZXNpemUsODAwIl19.9VXiKo1qjUIMgnSJYLf6JpnnQsY_6OgOPAHUWTTlYPU.jpg";

  titulo1:string = "Amalia de Llano y Dotres, condesa de Vilches";
  titulo2:string = "El sueño de la razón produce monstruos";
  titulo3:string = "Presentación de Juan de Austria al emperador Carlos V, en Yuste";

  tituloActual: string = "";

  mostrarTitulo(titulo : string) {
    console.log("Mostrando título: " + titulo);
    this.tituloActual = titulo;
  }
}
