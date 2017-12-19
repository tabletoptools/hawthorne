import {Component, OnInit} from '@angular/core';
import {Activity} from "../../Model";

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
