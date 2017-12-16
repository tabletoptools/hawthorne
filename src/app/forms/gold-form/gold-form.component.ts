import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {AppForm} from "../../../AppForm";
import {Character, Goldfarming} from "../../Model";
import {NgForm} from "@angular/forms";
import {TTTCharacterDependentForm} from "../../AppActivityForm";
import {PlayerService} from "../../player.service";
import {CharacterService} from "../../character.service";
import {MatDialog} from "@angular/material";

@Component({
  selector: 'ttt-gold-form',
  templateUrl: './gold-form.component.html',
  styleUrls: ['./gold-form.component.css']
})
export class GoldFormComponent extends TTTCharacterDependentForm implements OnInit {

    @Input()
    model: Goldfarming = {} as Goldfarming;

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
