import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {AppForm} from "../../../AppForm";
import {Spellcasting} from "../../Model";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'ttt-spellcasting-form',
    templateUrl: './spellcasting-form.component.html',
    styleUrls: ['./spellcasting-form.component.css']
})
export class SpellcastingFormComponent extends AppForm implements OnInit {

    @Input()
    model: Spellcasting = {} as Spellcasting;

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
