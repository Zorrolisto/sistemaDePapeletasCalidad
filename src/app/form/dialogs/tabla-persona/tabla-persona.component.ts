import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {merge, of as observableOf} from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators'; 
import { Persona } from 'src/app/entity/persona/persona';
import { Vehiculo } from 'src/app/entity/vehiculo/vehiculo';
import { ContribuyenteService } from 'src/app/services/contribuyentesService/contribuyente.service';

@Component({
  selector: 'app-tabla-persona',
  templateUrl: './tabla-persona.component.html',
  styleUrls: ['./tabla-persona.component.css']
})
export class TablaPersonaComponent implements AfterViewInit, OnInit, OnChanges {
  
  displayedColumns: string[] = ['codigo', 'dni','nombres','apellidos',
  'telefono', 'correo', 'direccion', 'escoger'];
  
  @Input() personabuscar:Persona=new Persona(); 
  @Input() vehiculobuscar:Vehiculo = new Vehiculo();
  busqueda:boolean;
  personas:Persona[];
  resultsLength:number=0;

  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(
    private contribuyenteService: ContribuyenteService) 
  { }
  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.filtrarPersonas();
  }
  ngAfterViewInit(): void {
    this.filtrarPersonas();
  }

  filtrarPersonas(){
    merge(this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.contribuyenteService.searchPersonas(
            this.personabuscar.id,//id
            this.personabuscar.dni,//dni
            this.personabuscar.nombres,//nombres
            this.personabuscar.apellidos,//apellidos
            this.personabuscar.telefono,//telefono
            this.personabuscar.correo,//correo
            this.personabuscar.direccion,//direccion
            this.vehiculobuscar.placa,//placa
            this.paginator.pageSize,
            this.paginator.pageIndex);
        }),
        map(personas => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.contribuyenteService.getCountPersonas().subscribe(resultsLength=>this.resultsLength=resultsLength);

          return personas;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // Catch if the SERVER API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      ).subscribe(personas =>  this.personas = personas);
  }
}
