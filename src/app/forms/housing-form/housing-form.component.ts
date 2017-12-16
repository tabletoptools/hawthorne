import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {AppForm} from "../../../AppForm";
import {NgForm} from "@angular/forms";
import {Character, Housing} from "../../Model";
import {TTTCharacterDependentForm} from "../../AppActivityForm";
import {PlayerService} from "../../player.service";
import {CharacterService} from "../../character.service";
import {MatDialog} from "@angular/material";

@Component({
  selector: 'ttt-housing-form',
  templateUrl: './housing-form.component.html',
  styleUrls: ['./housing-form.component.css']
})
export class HousingFormComponent extends TTTCharacterDependentForm implements OnInit {

    @Input()
    model: Housing = {} as Housing;

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
