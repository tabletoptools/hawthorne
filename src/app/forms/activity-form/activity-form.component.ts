import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {AppForm} from "../../../AppForm";
import {Activity, ActivityType} from "../../Model";
import {NgForm} from "@angular/forms";
import {TTTCharacterDependentForm} from "../../AppActivityForm";

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

    @ViewChild('childForm')
    childForm: TTTCharacterDependentForm;

    constructor(private cdr: ChangeDetectorRef) {
        super();
    }

    ngOnInit() {
    }

    isValid() {
        this.cdr.detectChanges();
        return super.isValid() && (this.childForm ? this.childForm.isValid() : false);
    }

}
