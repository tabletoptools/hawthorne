import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {AppForm} from "../../../AppForm";
import {Character, Spellcasting} from "../../Model";
import {NgForm} from "@angular/forms";
import {TTTCharacterDependentForm} from "../../AppActivityForm";
import {CharacterService} from "../../character.service";
import {PlayerService} from "../../player.service";
import {MatDialog} from "@angular/material";

@Component({
    selector: 'ttt-spellcasting-form',
    templateUrl: './spellcasting-form.component.html',
    styleUrls: ['./spellcasting-form.component.css']
})
export class SpellcastingFormComponent extends TTTCharacterDependentForm implements OnInit {

    @Input()
    model: Spellcasting = {} as Spellcasting;

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
