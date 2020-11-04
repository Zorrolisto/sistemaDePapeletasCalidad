import { Component, Input, OnInit } from '@angular/core'; 
import { Vehiculo } from 'src/app/entity/vehiculo/vehiculo';

@Component({
  selector: 'app-mostrar-datos-vehiculo',
  templateUrl: './mostrar-datos-vehiculo.component.html',
  styleUrls: ['./mostrar-datos-vehiculo.component.css']
})
export class MostrarDatosVehiculoComponent implements OnInit {
  @Input() vehiculo:Vehiculo;
  
  constructor() { }

  ngOnInit(): void {
  }

}
