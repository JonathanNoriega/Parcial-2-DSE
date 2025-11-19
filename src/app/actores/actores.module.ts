import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActoresComponent } from './actores.component';
import { ActoresListComponent } from './actores-list/actores-list.component'
@NgModule({
  declarations: [ActoresComponent, ActoresListComponent],
  imports: [
    CommonModule
  ],
  exports: [ActoresComponent, ActoresListComponent]
})
export class ActoresModule { }
