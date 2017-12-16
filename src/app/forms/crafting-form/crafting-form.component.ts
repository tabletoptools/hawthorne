import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {AppForm} from "../../../AppForm";
import {NgForm} from "@angular/forms";
import {Character, Crafting} from "../../Model";
import {TTTCharacterDependentForm} from "../../AppActivityForm";
import {CharacterService} from "../../character.service";
import {PlayerService} from "../../player.service";
import {MatDialog} from "@angular/material";

@Component({
    selector: 'ttt-crafting-form',
    templateUrl: './crafting-form.component.html',
    styleUrls: ['./crafting-form.component.css']
})
export class CraftingFormComponent extends TTTCharacterDependentForm implements OnInit {

    @Input()
    model: Crafting = {} as Crafting;

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
