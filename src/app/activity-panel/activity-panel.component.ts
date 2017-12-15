import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatMenu, MatMenuTrigger, MatPaginator, MatSort, MatTableDataSource, MenuPositionX} from "@angular/material";
import {Activity, ActivityType} from "../Model";
import {ActivityService} from "../activity.service";

@Component({
    selector: 'ttt-activity-panel',
    templateUrl: './activity-panel.component.html',
    styleUrls: ['./activity-panel.component.css']
})
export class ActivityPanelComponent implements OnInit {

    ActivityType = ActivityType;
    activities: Activity[] = [];
    datasource: MatTableDataSource<Activity> = new MatTableDataSource(this.activities);
    displayedColumns = ['type', 'date', 'name', 'character', 'dtp', 'exp', 'money', 'comment'];
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild('paginator') paginator: MatPaginator;
    @ViewChild('tableContextMenu') tCM: MatMenu;
    @ViewChild(MatMenuTrigger) tCMTrigger: MatMenuTrigger;
    dialogRef;

    constructor(private activityService: ActivityService, private dialog: MatDialog) {
    }

    ngOnInit() {
        this.activityService.getActivities()
            .then(
                activities => {
                    activities = activities.sort((a,b) => {
                        return (new Date(a.date).getDate() - new Date(b.date).getDate());
                    });
                    this.activities = activities;
                    this.datasource.data = this.activities;
                    this.datasource.sort = this.sort;
                    this.datasource.paginator = this.paginator;
                }
            )
    }

    log(e: MouseEvent, x) {
        console.log(x);
        e.preventDefault();
    }

    spawnCard(x, y) {

    }
}
