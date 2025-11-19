import { Component, OnInit } from '@angular/core';
import { Actor } from '../actor';
import { ActoresService } from '../actores.service';

@Component({
  selector: 'app-actores-list',
  standalone: false,
  templateUrl: './actores-list.component.html',
  styleUrls: ['./actores-list.component.css'],
})
export class ActoresListComponent implements OnInit {

  actores: Actor[] = [];
  edadPromedio: number = 0;
  selectedActor?: Actor;
  constructor(private actoresService: ActoresService) { }

  ngOnInit() {
    this.getActoresList();
  }

  getActoresList() {
    this.actoresService.listActores().subscribe({
      next: (data) => {
        this.actores = data;
        this.calcularEdadPromedio();
      },
      error: (err) => {
        console.error("HTTP ERROR:", err);
      }
    });
  }

  calcularEdadPromedio() {
    const CURRENT_YEAR = 2025;

    const edades = this.actores.map(a => CURRENT_YEAR - a.born_year);

    const promedio = edades.reduce((sum, edad) => sum + edad, 0) / edades.length;

    this.edadPromedio = Math.round(promedio);
  }

  onSelect(actor: Actor) {
  this.selectedActor = actor;
}
}