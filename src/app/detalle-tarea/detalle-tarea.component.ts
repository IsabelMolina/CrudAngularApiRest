import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Tarea } from "../interfaces/tarea";
import { TareaService } from "../services/tarea.service";

@Component({
  selector: 'app-detalle-tarea',
  templateUrl: './detalle-tarea.component.html',
  styleUrls: ['./detalle-tarea.component.css']
})
export class DetalleTareaComponent implements OnInit {

  tarea: Tarea;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tareaService: TareaService) {

    const routeParams = this.route.snapshot.paramMap;
    const id = routeParams.get('id');
    this.tareaService.obtenerUno(id).subscribe(tarea=>{
      this.tarea = tarea;
    })
  }

  ngOnInit(): void {

  }

  editar(){
    this.tareaService.actualizar(this.tarea);
    this.router.navigate(['tareas']);
  }


}
