import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Persona } from 'src/app/entity/persona/persona';
import { Vehiculo } from 'src/app/entity/vehiculo/vehiculo';

@Component({
  selector: 'app-buscar-persona',
  templateUrl: './buscar-persona.component.html',
  styleUrls: ['./buscar-persona.component.css']
})
export class BuscarPersonaComponent implements OnInit {
  busqueda:boolean = false;
  PersonaBuscar:Persona=new Persona(); 
  VehiculoBuscar:Vehiculo= new Vehiculo();
  @Output()
  propagar = new EventEmitter<any>();

  constructor() { }
  
  Buscar(){
    let list  = [
      this.PersonaBuscar,
      this.VehiculoBuscar
    ];
    this.propagar.emit(list);
  }

  iniciarBusqueda():void{
    this.busqueda=true;
    this.PersonaBuscar = new Persona();
    this.VehiculoBuscar = new Vehiculo()
  }

  limpiarBusqueda():void{
    this.inicializar();
  }

  ngOnInit(): void {
    this.inicializar();
  }

  inicializar():void{
    this.PersonaBuscar = new Persona();
    this.VehiculoBuscar = new Vehiculo();
  }

  cerrarBusqueda():void{
    this.busqueda = false;
  }
}
