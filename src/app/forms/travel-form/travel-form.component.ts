import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {AppForm} from "../../../AppForm";
import {Character, Travelling} from "../../Model";
import {NgForm} from "@angular/forms";
import {PlayerService} from "../../player.service";
import {CharacterService} from "../../character.service";
import {TTTCharacterDependentForm} from "../../AppActivityForm";
import {MatDialog} from "@angular/material";

@Component({
    selector: 'ttt-travel-form',
    templateUrl: './travel-form.component.html',
    styleUrls: ['./travel-form.component.css']
})
export class TravelFormComponent extends TTTCharacterDependentForm implements OnInit {

    @Input()
    model: Travelling = {} as Travelling;

    @Output()
    modelChange = new EventEmitter();

    @ViewChild('form')
    form: NgForm;

    chars: Character[];

    constructor(public characterService: CharacterService, public playerService: PlayerService, public dialog: MatDialog) {
        super();
    }

    ngOnInit() {
        this.getCharacters().then(chars => this.characters = chars);
    }

}
