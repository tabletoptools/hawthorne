import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'ttt-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
    id = 'DEFAULT';
    constructor(public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any){
        if(data.id) this.id = data.id;
    }
    emailRequestControl: FormControl = new FormControl('', [Validators.required, Validators.email]);
}
