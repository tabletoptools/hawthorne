import {Component, Input, OnInit} from '@angular/core';
import {Character} from "../../Model";
import {MatDialogRef} from "@angular/material";
import {ActivityDialogComponent} from "../../activity-panel/activity-dialog/activity-dialog.component";

@Component({
  selector: 'ttt-edit-character',
  templateUrl: './edit-character.component.html',
  styleUrls: ['./edit-character.component.css']
})
export class EditCharacterComponent implements OnInit {

    @Input()
    character: Character = {} as Character;

    @Input()
    dialogRef: MatDialogRef<ActivityDialogComponent> = null;

    deletionRequested = false;

    constructor() {
    }

    ngOnInit() {
    }

    delete() {
        this.character['delete'] = true;
        this.dialogRef.close(this.character);
    }

}
