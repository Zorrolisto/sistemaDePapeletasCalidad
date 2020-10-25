import { Component, Input, OnInit } from '@angular/core';
import { Infraccion } from 'src/app/entity/infraccion/infraccion';

@Component({
  selector: 'app-mostrar-datos-infraccion',
  templateUrl: './mostrar-datos-infraccion.component.html',
  styleUrls: ['./mostrar-datos-infraccion.component.css']
})
export class MostrarDatosInfraccionComponent implements OnInit {

  @Input() infraccion:Infraccion;

  constructor() { }

  ngOnInit(): void {
  }

}
