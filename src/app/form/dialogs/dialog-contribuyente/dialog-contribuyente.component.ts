import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {merge, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { Contribuyente } from 'src/app/entity/contribuyente/contribuyente';
import { Empresa } from 'src/app/entity/empresa/empresa';
import { Persona } from 'src/app/entity/persona/persona';
import { Vehiculo } from 'src/app/entity/vehiculo/vehiculo';
import { ContribuyenteService } from 'src/app/services/contribuyentesService/contribuyente.service';
import { ContribuyenteComponent } from '../../contribuyente/contribuyente.component';

@Component({
  selector: 'app-dialog-contribuyente',
  templateUrl: './dialog-contribuyente.component.html',
  styleUrls: ['./dialog-contribuyente.component.css']
})
export class DialogContribuyenteComponent implements OnInit {
  personabuscar:Persona;
  empresaBuscar:Empresa;
  vehiculobuscar:Vehiculo;
  busqueda:boolean;
  EmpresaOPersona:boolean=true;
  
  constructor(
    public dialogRef: MatDialogRef<DialogContribuyenteComponent>,
    @Inject(MAT_DIALOG_DATA) public contribuyente: Contribuyente=new Contribuyente(),) { }

  ngOnInit(): void {
  }

  buscarPersonaOEmpresa(bool:boolean){ 
    this.EmpresaOPersona = bool; 
  }
  onNoClick(){
    this.dialogRef.close();
  }
}
