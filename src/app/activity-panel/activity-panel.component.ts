import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from "@angular/material";
import {Activity} from "../Model";
import {ActivityService} from "../activity.service";

@Component({
    selector: 'ttt-activity-panel',
    templateUrl: './activity-panel.component.html',
    styleUrls: ['./activity-panel.component.css']
})
export class ActivityPanelComponent implements OnInit {

    activities: Activity[] = [];
    datasource: MatTableDataSource<Activity> = new MatTableDataSource(this.activities);
    displayedColumns = ['name'];
    @ViewChild(MatSort) sort: MatSort;

    constructor(private activityService: ActivityService) {
    }

    ngOnInit() {
        this.activityService.getActivities()
            .then(
                activities => {
                    this.activities = activities;
                    this.datasource.data = this.activities;
                    this.datasource.sort = this.sort;
                }
            )
    }

    addActivity() {
        let activity: Activity = {} as Activity;
        activity.name = "Sessionactivity";
        console.log('creating');
        this.activityService.createActivity(activity)
            .then(
                activity => {
                    this.activityService.getActivities()
                        .then(
                            activities => {
                                this.activities = activities;
                                this.datasource = new MatTableDataSource(this.activities);
                                this.datasource.sort = this.sort;
                            }
                        )
                }
            )
    }

}
