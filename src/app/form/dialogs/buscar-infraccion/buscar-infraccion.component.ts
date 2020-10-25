import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Infraccion } from 'src/app/entity/infraccion/infraccion';

@Component({
  selector: 'app-buscar-infraccion',
  templateUrl: './buscar-infraccion.component.html',
  styleUrls: ['./buscar-infraccion.component.css']
})
export class BuscarInfraccionComponent implements OnInit {
  busqueda:boolean = false;
  infraccionBuscar:Infraccion=new Infraccion(); 
  @Output()
  propagar = new EventEmitter<any>(); 

  constructor() { }
  
  Buscar(){
    let list  = [
      this.infraccionBuscar
    ];
    this.propagar.emit(list);
  }

  iniciarBusqueda():void{
    this.busqueda=true;
    this.infraccionBuscar = new Infraccion(); 
  }

  limpiarBusqueda():void{
    this.inicializar();
  }

  ngOnInit(): void {
    this.inicializar();
  }

  inicializar():void{
    this.infraccionBuscar = new Infraccion(); 
  }

  cerrarBusqueda():void{
    this.busqueda = false;
  }
}
