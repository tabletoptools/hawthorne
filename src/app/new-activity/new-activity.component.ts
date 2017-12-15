import {Component, OnInit} from '@angular/core';
import {Activity} from "../Model";
import {ActivityService} from "../activity.service";
import {Router} from "@angular/router";

@Component({
    selector: 'ttt-new-activity',
    templateUrl: './new-activity.component.html',
    styleUrls: ['./new-activity.component.css']
})
export class NewActivityComponent implements OnInit {

    activity: Activity = {} as Activity;

    constructor() {
    }

    ngOnInit() {
    }

}
