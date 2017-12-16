import {Component, OnInit} from '@angular/core';
import {Character} from "../../Model";

@Component({
    selector: 'ttt-new-character',
    templateUrl: './new-character.component.html',
    styleUrls: ['./new-character.component.css']
})
export class NewCharacterComponent implements OnInit {

    character: Character = {} as Character;

    constructor() {
    }

    ngOnInit() {
    }

}
