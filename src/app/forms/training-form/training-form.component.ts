import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {AppForm} from "../../../AppForm";
import {Training} from "../../Model";
import {NgForm} from "@angular/forms";
import {MatSelectChange} from "@angular/material";

@Component({
    selector: 'ttt-training-form',
    templateUrl: './training-form.component.html',
    styleUrls: ['./training-form.component.css']
})
export class TrainingFormComponent extends AppForm implements OnInit {

    @Input()
    model: Training = {} as Training;

    @Output()
    modelChange = new EventEmitter();

    @ViewChild('form')
    form: NgForm;

    constructor() {
        super();
    }

    ngOnInit() {
    }

    select(event: MatSelectChange) {
        if(event.value === 'Proficiency') {
            this.model.dtp = 100;
            this.model.money = 500;
        }
        else if(event.value === 'Expertise') {
            this.model.dtp = 50;
            this.model.money = 250;
        }
        else if(event.value === 'Language') {
            this.model.dtp = 100;
            this.model.money = 500;
        }
        this.modelChange.emit(this.model);
    }

}
