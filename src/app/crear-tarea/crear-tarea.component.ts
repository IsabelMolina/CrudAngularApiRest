import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tarea } from "../interfaces/tarea";
import { TareaService } from "../services/tarea.service";

@Component({
  selector: 'app-crear-tarea',
  templateUrl: './crear-tarea.component.html',
  styleUrls: ['./crear-tarea.component.css']
})
export class CrearTareaComponent implements OnInit {

  tarea: Tarea;

  constructor(private tareaService: TareaService, private router: Router) {
    this.tarea = {
      id: "",
      userId: "",
      title: "",
      completed: true
    } 
  }

  ngOnInit(): void {
  }

  agregar(){
    this.tareaService.crear(this.tarea);
    this.router.navigate(['/tareas']);
  }

}
