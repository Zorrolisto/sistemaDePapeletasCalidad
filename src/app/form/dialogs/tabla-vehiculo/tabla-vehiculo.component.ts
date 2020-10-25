import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {merge, of as observableOf} from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators'; 
import { Vehiculo } from 'src/app/entity/vehiculo/vehiculo';
import { VehiculoService } from 'src/app/services/vehiculoService/vehiculo.service';

@Component({
  selector: 'app-tabla-vehiculo',
  templateUrl: './tabla-vehiculo.component.html',
  styleUrls: ['./tabla-vehiculo.component.css']
})
export class TablaVehiculoComponent implements OnInit {

  displayedColumns: string[] = ['id', 'placa','marca',
  'color', 'clase',  'escoger'];
  
  @Input() vehiculoBuscar:Vehiculo=new Vehiculo(); 
  busqueda:boolean;
  vehiculos:Vehiculo[];
  resultsLength:number=0;

  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(
    private vehiculoService: VehiculoService) 
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
          return this.vehiculoService.searchVehiculos(
            this.vehiculoBuscar.id,//id
            this.vehiculoBuscar.color,//color
            this.vehiculoBuscar.clase,//clase 
            this.vehiculoBuscar.placa,//placa
            this.vehiculoBuscar.marca,//marca
            this.paginator.pageSize,
            this.paginator.pageIndex);
        }),
        map(empresas => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.vehiculoService.getCountVehiculos().subscribe(resultsLength=>this.resultsLength=resultsLength);

          return empresas;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // Catch if the SERVER API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      ).subscribe(vehiculos =>  this.vehiculos = vehiculos);
  }
}
