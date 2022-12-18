import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarea } from "../interfaces/tarea";

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  private api = "https://jsonplaceholder.typicode.com";

  constructor(private http: HttpClient) { }

  obtenerTodo(){
    const path = `${this.api}/todos`;
    return this.http.get<Tarea[]>(path);
  }

  obtenerUno(id:string | null){
    const path = `${this.api}/todos/${id}`;
    return this.http.get<Tarea>(path);
  }

  crear(tarea:Tarea){
    const path = `${this.api}/todos`;
    this.http.post(path, tarea);
  }

  actualizar(tarea:Tarea){
    const path = `${this.api}/todos/${tarea.id}`;
    this.http.put(path, tarea);
  }

  eliminar(id:string){
    const path = `${this.api}/todos/${id}`;
    this.http.delete(path);
  }

}
