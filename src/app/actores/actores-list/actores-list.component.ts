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

  constructor(private actoresService: ActoresService) { }

  ngOnInit() {
    this.getActoresList();
  }

  getActoresList() {
    this.actoresService.listActores().subscribe({
      next: (data) => {
        this.actores = data;
        console.log(data);
      },
    });
  }
}