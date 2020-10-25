import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Vehiculo } from '../entity/vehiculo/vehiculo';
import { DialogVehiculoComponent } from '../form/dialogs/dialog-vehiculo/dialog-vehiculo.component';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {
  @Input() vehiculo:Vehiculo;
  @Output() propagar = new EventEmitter<any>();
  
  constructor(
    public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialogVehiculo(){
    const dialogRef = this.dialog.open( DialogVehiculoComponent, {
      width: '1500px',
      height: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
        if(result!=null){
          this.vehiculo = result;
          this.propagar.emit(result);
        }
    });
  }
}
