import { Component, Input, OnInit } from '@angular/core';
import { Repositorio } from '../repositorio';

@Component({
  selector: 'app-repositorio-detalle',
  standalone: false,
  templateUrl: './repositorio-detalle.component.html',
  styleUrls: ['./repositorio-detalle.component.css']
})
export class RepositorioDetalleComponent implements OnInit {
  @Input() id!: number;

  constructor() { }

  ngOnInit() {
    console.log(this.id)
  }

}
