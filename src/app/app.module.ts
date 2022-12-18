import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { CrearTareaComponent } from './crear-tarea/crear-tarea.component';
import { DetalleTareaComponent } from './detalle-tarea/detalle-tarea.component';
import { TareasComponent } from './tareas/tareas.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { TareaService } from "./services/tarea.service";

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    CrearTareaComponent,
    DetalleTareaComponent,
    TareasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    TareaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
