import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
import { PapeletaService } from 'src/app/services/papeletaService/papeleta.service';
import Swal from 'sweetalert2';

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);


@Component({
  selector: 'app-cards-calculos',
  templateUrl: './cards-calculos.component.html',
  styleUrls: ['./cards-calculos.component.css']
})
export class CardsCalculosComponent implements OnInit, OnChanges {

  resultadosDeCalculos:Map<string,number>; 
  @Input() dni:String;
  @Input() ruc:String;
  @Input() placaVehiculo:String;
  @Input() condicionFecha:String;
  @Input() fechaABuscar:String;
  @Input() equal:String;

  public options: any = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Pagos de papeletas'
    },
    credits: {
      enabled: false
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    xAxis: {
      type: 'datetime',
      labels: {
        formatter: function() {
          return Highcharts.dateFormat('%e %b %y', this.value);
        }
      }
    },
    series: [
      {
        name: 'Pago',
        colorByPoint: true,
        data: []
      },
    ]
  }
  
  public options2: any={
    chart: {
      type: 'column'
    },
    title: {
      text: 'Monto Total, Moras y Descuentos'
    }, 
    accessibility: {
      announceNewData: {
        enabled: true
      }
    },
    xAxis: {
      type: 'categoria'
    },
    yAxis: {
      title: {
        text: 'Total de dinero en Soles'
      }
  
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: 'S/{point.y:.2f}'
        }
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}</b> soles<br/>'
    },
  
    series: [
      {
        name: "Dinero",
        colorByPoint: true,
        data: []
      }
    ],
  };


  constructor(private papeletaService:PapeletaService){ 
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.buscarCalculos();
    
  }

  ngOnInit(){ 
    Highcharts.chart('container', this.options);
    Highcharts.chart('container2', this.options2);
  }

  chart2(){
    let any = [{
      name: 'Monto Total',
      y: this.resultadosDeCalculos['montoTotal'], 
    },{
      name: 'Monto En Descuentos',
      y:this.resultadosDeCalculos['totalDescuentos'], 
    },{
      name: 'Monto Moras',
      y:this.resultadosDeCalculos['totalMoras'],
    }
    ]
    this.options2.series[0]['data'] = any;
  }

  chart(){
    let any = [{
      name: 'Monto Pagado',
      y: this.resultadosDeCalculos['totalPagos']/this.resultadosDeCalculos['montoTotal'], 
    },{
      name: 'Monto No Pagado',
      y:this.resultadosDeCalculos['totalNoPagos']/this.resultadosDeCalculos['montoTotal'], 
    }
    ]
    this.options.series[0]['data'] = any;
  }

  buscarCalculos(){
    this.papeletaService.reportPapeletasCalculos(
      this.dni, 
      this.ruc, 
      this.placaVehiculo, 
      this.fechaABuscar,
      this.condicionFecha, 
      this.equal).subscribe(
        (map: Map<string,number>)=>{
          this.resultadosDeCalculos = map
          this.chart();
          Highcharts.chart('container', this.options);
          this.chart2();
          Highcharts.chart('container2', this.options2);
        },
        (error)=>{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.error.message.toUpperCase(),
          }) 
        }
      );
  }
}

