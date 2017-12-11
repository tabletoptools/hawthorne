import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {AppForm} from "../../AppForm";
import {NgForm} from "@angular/forms";
import {Session} from "../Model";

@Component({
    selector: 'ttt-session-form',
    templateUrl: './session-form.component.html',
    styleUrls: ['./session-form.component.css']
})
export class SessionFormComponent extends AppForm implements OnInit {

    @Input()
    model: Session = {} as Session;

    @Output()
    modelChange = new EventEmitter();

    @ViewChild('form')
    form: NgForm;

    constructor() {
        super();
    }

    ngOnInit() {
    }

}
