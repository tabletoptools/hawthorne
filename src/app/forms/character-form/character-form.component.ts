import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {AppForm} from "../../../AppForm";
import {Character} from "../../Model";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'ttt-character-form',
    templateUrl: './character-form.component.html',
    styleUrls: ['./character-form.component.css']
})
export class CharacterFormComponent extends AppForm implements OnInit {

    @Input()
    model: Character = {} as Character;

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
