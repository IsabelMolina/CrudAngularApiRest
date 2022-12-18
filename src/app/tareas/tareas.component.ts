import { Component, OnInit } from '@angular/core';
import { Tarea } from "../interfaces/tarea";
import { TareaService } from "../services/tarea.service";

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  tareas: Tarea[];

  constructor(private tareaService: TareaService) {
    this.tareaService.obtenerTodo().subscribe(tareas=>{
      this.tareas = tareas;
    })
  }

  ngOnInit(): void {
  }

  eliminar(id:string){
    this.tareaService.eliminar(id);
  }

}
