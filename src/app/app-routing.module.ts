import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ServiciosComponent } from "./servicios/servicios.component"; 

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'tareas', loadChildren: () => import("./tareas/tareas.module").then(m => m.TareasModule) },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
