import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/entity/vehiculo/vehiculo';

@Component({
  selector: 'app-list-vehiculo',
  templateUrl: './list-vehiculo.component.html',
  styleUrls: ['./list-vehiculo.component.css']
})
export class ListVehiculoComponent implements OnInit {
  vehiculoBuscar:Vehiculo=new Vehiculo();  
  busqueda:boolean;
  
  constructor() { }

  ngOnInit(): void {
  } 

  Buscar(any:any){
    this.vehiculoBuscar = any[0]; 
  }

  iniciarBusqueda(){
    this.vehiculoBuscar = new Vehiculo(); 
    this.busqueda=true;
  }
  limpiarBusqueda(){
    this.vehiculoBuscar = new Vehiculo();   
  }
}
