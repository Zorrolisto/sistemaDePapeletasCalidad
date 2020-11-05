import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {merge, of as observableOf} from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators'; 
import { Papeleta } from 'src/app/entity/papeleta/papeleta';
import { PapeletaService } from 'src/app/services/papeletaService/papeleta.service';

@Component({
  selector: 'app-tabla-papeleta',
  templateUrl: './tabla-papeleta.component.html',
  styleUrls: ['./tabla-papeleta.component.css']
})
export class TablaPapeletaComponent implements  AfterViewInit, OnInit, OnChanges {
  displayedColumns: string[] = ['id', 'docInfractor','docPropietario',
  'placa', 'codigoInfraccion', 'fechaDeImposicion', 'fechaDeRegistro',
  'montoBruto', 'verificar'];
  
  @Input() dni:String;
  @Input() ruc:String;
  @Input() placaVehiculo:String;
  @Input() condicionFecha:String;
  @Input() fechaABuscar:String;
  @Input() equal:String;
  busqueda:boolean;
  papeletas:Papeleta[];
  resultsLength:number=0;

  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(
    private papeletaService: PapeletaService) 
  { }
  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.filtrarPapeletas();
  }
  ngAfterViewInit(): void {
    this.filtrarPapeletas();
  }

  filtrarPapeletas(){
    merge(this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.papeletaService.reportPapeletasTable(
            this.dni,
            this.ruc,
            this.placaVehiculo,
            this.fechaABuscar,
            this.condicionFecha,
            this.equal,
            this.paginator.pageSize,
            this.paginator.pageIndex);
        }),
        map(papeletas => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.papeletaService.getCountPapeletas().subscribe(resultsLength=>this.resultsLength=resultsLength);

          return papeletas;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // Catch if the SERVER API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      ).subscribe(papeletas =>  this.papeletas = papeletas);
  }
}
