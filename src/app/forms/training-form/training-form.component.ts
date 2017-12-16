import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {AppForm} from "../../../AppForm";
import {Character, Training} from "../../Model";
import {NgForm} from "@angular/forms";
import {MatDialog, MatSelectChange} from "@angular/material";
import {TTTCharacterDependentForm} from "../../AppActivityForm";
import {CharacterService} from "../../character.service";
import {PlayerService} from "../../player.service";

@Component({
    selector: 'ttt-training-form',
    templateUrl: './training-form.component.html',
    styleUrls: ['./training-form.component.css']
})
export class TrainingFormComponent extends TTTCharacterDependentForm implements OnInit {

    @Input()
    model: Training = {} as Training;

    @Output()
    modelChange = new EventEmitter();

    @ViewChild('form')
    form: NgForm;

    constructor(public characterService: CharacterService, public playerService: PlayerService, public dialog: MatDialog) {
        super();
    }

    ngOnInit() {
        this.getCharacters().then(chars => this.characters = chars);
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
