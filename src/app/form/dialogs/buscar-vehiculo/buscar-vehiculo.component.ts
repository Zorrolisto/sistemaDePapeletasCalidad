import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Vehiculo } from 'src/app/entity/vehiculo/vehiculo';

@Component({
  selector: 'app-buscar-vehiculo',
  templateUrl: './buscar-vehiculo.component.html',
  styleUrls: ['./buscar-vehiculo.component.css']
})
export class BuscarVehiculoComponent implements OnInit {

  busqueda:boolean = false;
  vehiculoBuscar:Vehiculo=new Vehiculo(); 
  @Output()
  propagar = new EventEmitter<any>(); 

  constructor() { }
  
  Buscar(){
    let list  = [
      this.vehiculoBuscar
    ];
    this.propagar.emit(list);
  }

  iniciarBusqueda():void{
    this.busqueda=true;
    this.vehiculoBuscar = new Vehiculo(); 
  }

  limpiarBusqueda():void{
    this.inicializar();
  }

  ngOnInit(): void {
    this.inicializar();
  }

  inicializar():void{
    this.vehiculoBuscar = new Vehiculo(); 
  }

  cerrarBusqueda():void{
    this.busqueda = false;
  }
}
