import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {AppForm} from "../../../AppForm";
import {Travelling} from "../../Model";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'ttt-travel-form',
    templateUrl: './travel-form.component.html',
    styleUrls: ['./travel-form.component.css']
})
export class TravelFormComponent extends AppForm implements OnInit {

    @Input()
    model: Travelling = {} as Travelling;

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
