import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private tareas = new Array<string>();
  constructor() { }
  addTarea(tarea : string) {
    this.tareas.push(tarea);
    console.log(this.tareas);
  }
  getTareas() : Array<string> {
    return this.tareas;
  }
}
