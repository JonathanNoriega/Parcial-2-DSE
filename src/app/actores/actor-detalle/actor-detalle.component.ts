import { Component, Input } from '@angular/core';
import { Actor } from '../actor';

@Component({
  selector: 'app-actor-detalle',
  templateUrl: './actor-detalle.component.html',
  styleUrls: ['./actor-detalle.component.css'],
  standalone: false
})
export class ActorDetalleComponent {
  @Input() actor?: Actor;
}
