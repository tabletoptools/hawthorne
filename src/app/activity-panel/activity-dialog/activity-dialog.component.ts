import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {FormControl, Validators} from "@angular/forms";
import {Activity} from "../../Model";

@Component({
  selector: 'ttt-dialog',
  templateUrl: './activity-dialog.component.html',
  styleUrls: ['./activity-dialog.component.css']
})
export class ActivityDialogComponent {
    activity: Activity;
    constructor(public dialogRef: MatDialogRef<ActivityDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any){
        if(data.activity) this.activity = data.activity;
    }
}
