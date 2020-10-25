import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {merge, of as observableOf} from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators'; 
import { Empresa } from 'src/app/entity/empresa/empresa';
import { Vehiculo } from 'src/app/entity/vehiculo/vehiculo';
import { ContribuyenteService } from 'src/app/services/contribuyentesService/contribuyente.service';

@Component({
  selector: 'app-tabla-empresa',
  templateUrl: './tabla-empresa.component.html',
  styleUrls: ['./tabla-empresa.component.css']
})
export class TablaEmpresaComponent implements AfterViewInit, OnInit, OnChanges {
  displayedColumns: string[] = ['codigo', 'ruc','razonSocial',
  'telefono', 'correo', 'direccion', 'escoger'];
  
  @Input() empresaBuscar:Empresa=new Empresa(); 
  @Input() vehiculoBuscar:Vehiculo = new Vehiculo();
  busqueda:boolean;
  empresas:Empresa[];
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
          return this.contribuyenteService.searchEmpresas(
            this.empresaBuscar.id,//id
            this.empresaBuscar.ruc,//ruc
            this.empresaBuscar.razonSocial,//razonSocial 
            this.empresaBuscar.telefono,//telefono
            this.empresaBuscar.correo,//correo
            this.empresaBuscar.direccion,//direccion
            this.vehiculoBuscar.placa,//placa
            this.paginator.pageSize,
            this.paginator.pageIndex);
        }),
        map(empresas => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.contribuyenteService.getCountEmpresas().subscribe(resultsLength=>this.resultsLength=resultsLength);

          return empresas;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // Catch if the SERVER API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      ).subscribe(empresas =>  this.empresas = empresas);
  }
}
