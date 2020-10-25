import { Component, OnInit } from '@angular/core';
import { Infraccion } from 'src/app/entity/infraccion/infraccion';

@Component({
  selector: 'app-list-infraccion',
  templateUrl: './list-infraccion.component.html',
  styleUrls: ['./list-infraccion.component.css']
})
export class ListInfraccionComponent implements OnInit {
  infraccionBuscar:Infraccion=new Infraccion();  
  busqueda:boolean;
  
  constructor() { }

  ngOnInit(): void {
  } 

  Buscar(any:any){
    this.infraccionBuscar = any[0]; 
  }

  iniciarBusqueda(){
    this.infraccionBuscar = new Infraccion(); 
    this.busqueda=true;
  }
  limpiarBusqueda(){
    this.infraccionBuscar = new Infraccion(); 
  }
}
