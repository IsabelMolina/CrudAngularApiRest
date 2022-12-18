import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearTareaComponent } from "../crear-tarea/crear-tarea.component";
import { DetalleTareaComponent } from "../detalle-tarea/detalle-tarea.component";
import { TareasComponent } from "../tareas/tareas.component";

const routes: Routes = [
  { path: '', component: TareasComponent },
  { path: 'crear', component: CrearTareaComponent },
  { path: 'detalle/:id', component: DetalleTareaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TareasRoutingModule { }
