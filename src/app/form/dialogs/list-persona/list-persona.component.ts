import { Component, OnInit, ViewChild } from '@angular/core';
import { Persona } from 'src/app/entity/persona/persona';
import { Vehiculo } from 'src/app/entity/vehiculo/vehiculo';

@Component({
  selector: 'app-list-persona',
  templateUrl: './list-persona.component.html',
  styleUrls: ['./list-persona.component.css']
})
export class ListPersonaComponent implements OnInit {
  personabuscar:Persona=new Persona(); 
  vehiculobuscar:Vehiculo= new Vehiculo();
  busqueda:boolean;
  
  constructor() { }

  ngOnInit(): void {
  } 

  Buscar(any:any){
    this.personabuscar = any[0]; 
    this.vehiculobuscar = any[1]; 
  }

  iniciarBusqueda(){
    this.personabuscar = new Persona();
    this.vehiculobuscar = new Vehiculo();
    this.busqueda=true;
  }
  limpiarBusqueda(){
    this.personabuscar = new Persona();
    this.vehiculobuscar = new Vehiculo();
  }
}
