import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/entity/empresa/empresa';
import { Vehiculo } from 'src/app/entity/vehiculo/vehiculo';

@Component({
  selector: 'app-list-empresa',
  templateUrl: './list-empresa.component.html',
  styleUrls: ['./list-empresa.component.css']
})
export class ListEmpresaComponent implements OnInit {
  empresaBuscar:Empresa=new Empresa(); 
  vehiculoBuscar:Vehiculo= new Vehiculo();
  busqueda:boolean;
  
  constructor() { }

  ngOnInit(): void {
  } 

  Buscar(any:any){
    this.empresaBuscar = any[0];
    console.log(any.toString()); 
    this.vehiculoBuscar = any[1]; 
  }

  iniciarBusqueda(){
    this.empresaBuscar = new Empresa();
    this.vehiculoBuscar = new Vehiculo();
    this.busqueda=true;
  }
  limpiarBusqueda(){
    this.empresaBuscar = new Empresa();
    this.vehiculoBuscar = new Vehiculo();
  }
}
