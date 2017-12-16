import {Component, Input, OnInit} from '@angular/core';
import {ActivityService} from "../../activity.service";
import {Router} from "@angular/router";
import {Activity} from "../../Model";
import {MatDialogRef} from "@angular/material";
import {ActivityDialogComponent} from "../activity-dialog/activity-dialog.component";

@Component({
    selector: 'ttt-edit-activity',
    templateUrl: './edit-activity.component.html',
    styleUrls: ['./edit-activity.component.css']
})
export class EditActivityComponent implements OnInit {

    @Input()
    activity: Activity = {} as Activity;

    @Input()
    dialogRef: MatDialogRef<ActivityDialogComponent> = null;

    deletionRequested = false;

    constructor() {
    }

    ngOnInit() {
    }

    delete() {
        this.activity['delete'] = true;
        this.dialogRef.close(this.activity);
    }

}
