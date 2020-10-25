import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Empresa } from 'src/app/entity/empresa/empresa';
import { Vehiculo } from 'src/app/entity/vehiculo/vehiculo';

@Component({
  selector: 'app-buscar-empresa',
  templateUrl: './buscar-empresa.component.html',
  styleUrls: ['./buscar-empresa.component.css']
})
export class BuscarEmpresaComponent implements OnInit {
  busqueda:boolean = false;
  empresaBuscar:Empresa=new Empresa(); 
  vehiculoBuscar:Vehiculo= new Vehiculo();
  @Output()
  propagar = new EventEmitter<any>(); 

  constructor() { }
  
  Buscar(){
    let list  = [
      this.empresaBuscar,
      this.vehiculoBuscar
    ];
    this.propagar.emit(list);
  }

  iniciarBusqueda():void{
    this.busqueda=true;
    this.empresaBuscar = new Empresa();
    this.vehiculoBuscar = new Vehiculo()
  }

  limpiarBusqueda():void{
    this.inicializar();
  }

  ngOnInit(): void {
    this.inicializar();
  }

  inicializar():void{
    this.empresaBuscar = new Empresa();
    this.vehiculoBuscar = new Vehiculo();
  }

  cerrarBusqueda():void{
    this.busqueda = false;
  }
}
