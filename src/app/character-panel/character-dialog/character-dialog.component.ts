import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {ActivityDialogComponent} from "../../activity-panel/activity-dialog/activity-dialog.component";
import {Character} from "../../Model";

@Component({
  selector: 'ttt-character-dialog',
  templateUrl: './character-dialog.component.html',
  styleUrls: ['./character-dialog.component.css']
})
export class CharacterDialogComponent implements OnInit {

    character: Character;
    constructor(public dialogRef: MatDialogRef<ActivityDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any){
        if(data.character) this.character = data.character;
    }

    ngOnInit() {

    }
}
