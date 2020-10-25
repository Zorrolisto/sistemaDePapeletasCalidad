import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {merge, of as observableOf} from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators'; 
import { Infraccion } from 'src/app/entity/infraccion/infraccion';
import { InfraccionService } from 'src/app/services/infraccionService/infraccion.service';

@Component({
  selector: 'app-tabla-infraccion',
  templateUrl: './tabla-infraccion.component.html',
  styleUrls: ['./tabla-infraccion.component.css']
})
export class TablaInfraccionComponent implements AfterViewInit, OnInit, OnChanges {

  displayedColumns: string[] = ['id', 'codigo','descripcion',
  'calificacion', 'porcentaje_uit', 'agente', 'escoger'];
  
  @Input() infraccionBuscar:Infraccion=new Infraccion(); 
  busqueda:boolean;
  infracciones:Infraccion[];
  resultsLength:number=0;

  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(
    private infraccioService: InfraccionService) 
  { }
  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.filtrarEmpresas();
  }
  ngAfterViewInit(): void {
    this.filtrarEmpresas();
  }

  filtrarEmpresas(){
    merge(this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.infraccioService.searchInfracciones(
            this.infraccionBuscar.id,//id
            this.infraccionBuscar.codigo,//codigo
            this.infraccionBuscar.calificacion,//calificacion 
            this.infraccionBuscar.porcentaje_uit,//porcentaje_uit
            this.infraccionBuscar.agente,//agente
            this.paginator.pageSize,
            this.paginator.pageIndex);
        }),
        map(empresas => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.infraccioService.getCountInfracciones().subscribe(resultsLength=>this.resultsLength=resultsLength);

          return empresas;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // Catch if the SERVER API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      ).subscribe(infracciones =>  this.infracciones = infracciones);
  }

}
