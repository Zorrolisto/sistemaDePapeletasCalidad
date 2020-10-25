import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Infraccion } from 'src/app/entity/infraccion/infraccion';
@Component({
  selector: 'app-dialog-infraccion',
  templateUrl: './dialog-infraccion.component.html',
  styleUrls: ['./dialog-infraccion.component.css']
})
export class DialogInfraccionComponent implements OnInit {
  
  constructor(
    public dialogRef: MatDialogRef<DialogInfraccionComponent>,
    @Inject(MAT_DIALOG_DATA) public infraccion: Infraccion=new Infraccion(),) { }

  ngOnInit(): void {
  }

  onNoClick(){
    this.dialogRef.close();
  }
}
