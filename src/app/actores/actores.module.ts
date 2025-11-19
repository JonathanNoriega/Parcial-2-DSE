import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActoresComponent } from './actores.component';
import { ActoresListComponent } from './actores-list/actores-list.component'
import { ActorDetalleComponent } from './actor-detalle/actor-detalle.component'
@NgModule({
  declarations: [ActoresComponent, ActoresListComponent, ActorDetalleComponent],
  imports: [
    CommonModule
  ],
  exports: [ActoresComponent, ActoresListComponent, ActorDetalleComponent]
})
export class ActoresModule { }
