import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatMenu, MatMenuTrigger, MatPaginator, MatRow, MatSort, MatTableDataSource, MenuPositionX} from "@angular/material";
import {Activity, ActivityType} from "../Model";
import {ActivityService} from "../activity.service";
import {ActivityDialogComponent} from "./activity-dialog/activity-dialog.component";
import {SelectionModel} from "@angular/cdk/collections";

@Component({
    selector: 'ttt-activity-panel',
    templateUrl: './activity-panel.component.html',
    styleUrls: ['./activity-panel.component.css']
})
export class ActivityPanelComponent implements OnInit {

    ActivityType = ActivityType;
    datasource: MatTableDataSource<Activity> = new MatTableDataSource([]);
    displayedColumns = ['type', 'date', 'name', 'character', 'dtp', 'exp', 'money', 'comment'];
    selection = new SelectionModel<Activity>(false);

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild('paginator') paginator: MatPaginator;
    @ViewChild('tableContextMenu') tCM: MatMenu;
    @ViewChild(MatMenuTrigger) tCMTrigger: MatMenuTrigger;
    dialogRef;

    constructor(private activityService: ActivityService, private dialog: MatDialog) {
    }

    ngOnInit() {
        this.loadActivities();
    }

    log(e: MouseEvent, x) {
        console.log(x);
        e.preventDefault();
    }

    loadActivities() {
        this.activityService.getObjects()
            .then(
                activities => {
                    activities = activities.sort((a,b) => {
                        return (new Date(a.date).getDate() - new Date(b.date).getDate());
                    });
                    this.datasource.data = activities;
                    this.datasource.sort = this.sort;
                    this.datasource.paginator = this.paginator;
                }
            )
    }

    openActivityDialog(selected?) {
        selected ? this.dialogRef = this.dialog.open(ActivityDialogComponent, {data: {id: 'editActivity', activity: selected}})
            : this.dialogRef = this.dialog.open(ActivityDialogComponent, {data: {id: 'newActivity'}});

        this.dialogRef.afterClosed().subscribe((activity) => {
            if(activity) {
                if(activity['delete']) this.activityService.deleteObject(activity)
                    .then(
                        result => this.loadActivities()
                    );
                else if(activity.id) this.activityService.updateObject(activity)
                    .then(
                        activity => this.loadActivities()
                    );
                else this.activityService.createObject(activity)
                    .then(
                        activity => this.loadActivities()
                    );
            }
        })
    }

    applyFilter(value) {
        value = value.trim();
        value = value.toLowerCase();
        this.datasource.filter = value;
    }

}
