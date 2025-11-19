import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActoresListComponent } from './actores/actores-list/actores-list.component'

const routes: Routes = [
  { path: '', redirectTo: 'actores', pathMatch: 'full'},
  { path: 'actores', component: ActoresListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
