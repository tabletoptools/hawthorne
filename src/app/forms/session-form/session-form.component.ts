import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {AppForm} from "../../../AppForm";
import {NgForm} from "@angular/forms";
import {Character, Session} from "../../Model";
import {TTTCharacterDependentForm} from "../../AppActivityForm";
import {CharacterService} from "../../character.service";
import {PlayerService} from "../../player.service";
import {MatDialog} from "@angular/material";

@Component({
    selector: 'ttt-session-form',
    templateUrl: './session-form.component.html',
    styleUrls: ['./session-form.component.css']
})
export class SessionFormComponent extends TTTCharacterDependentForm implements OnInit {

    @Input()
    model: Session = {} as Session;

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

}
