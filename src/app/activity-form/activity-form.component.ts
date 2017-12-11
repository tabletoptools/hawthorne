import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {AppForm} from "../../AppForm";
import {Activity, ActivityType} from "../Model";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'ttt-activity-form',
    templateUrl: './activity-form.component.html',
    styleUrls: ['./activity-form.component.css']
})
export class ActivityFormComponent extends AppForm implements OnInit {

    ActivityType = ActivityType;

    @Input()
    model: Activity = {} as Activity;

    @Output()
    modelChange = new EventEmitter();

    @ViewChild('form')
    form: NgForm;

    type: ActivityType;

    constructor() {
        super();
    }

    ngOnInit() {
    }

}
