import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-infosheet',
  templateUrl: './infosheet.component.html',
  styleUrls: ['./infosheet.component.css']
})
export class InfosheetComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<InfosheetComponent>, @Inject(MAT_DIALOG_DATA) public pokemon: any) 
  {
    console.log(pokemon)
  }

  ngOnInit(): void {
    
  }

  onClickCancel() {
    this.dialogRef.close();
  }

}
