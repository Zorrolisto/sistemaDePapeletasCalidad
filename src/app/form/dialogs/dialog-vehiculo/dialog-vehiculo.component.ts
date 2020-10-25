import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Vehiculo } from 'src/app/entity/vehiculo/vehiculo';

@Component({
  selector: 'app-dialog-vehiculo',
  templateUrl: './dialog-vehiculo.component.html',
  styleUrls: ['./dialog-vehiculo.component.css']
})
export class DialogVehiculoComponent implements OnInit {
  
  constructor(
    public dialogRef: MatDialogRef<DialogVehiculoComponent>,
    @Inject(MAT_DIALOG_DATA) public infraccion: Vehiculo=new Vehiculo(),) { }

  ngOnInit(): void {
  }

  onNoClick(){
    this.dialogRef.close();
  }

}
