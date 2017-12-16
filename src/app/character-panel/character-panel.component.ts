import {Component, OnInit} from '@angular/core';
import {Character, getLevelForEXP} from "../Model";
import {MatDialog} from "@angular/material";
import {CharacterService} from "../character.service";
import {CharacterDialogComponent} from "./character-dialog/character-dialog.component";

@Component({
    selector: 'ttt-character-panel',
    templateUrl: './character-panel.component.html',
    styleUrls: ['./character-panel.component.css']
})
export class CharacterPanelComponent implements OnInit {

    characters: Character[];
    dialogRef;

    constructor(private dialog: MatDialog, private characterService: CharacterService) {
    }

    ngOnInit() {
        this.loadCharacters();
    }

    loadCharacters() {
        this.characterService.getForPlayer(1)
            .then(
                (characters: Character[]) => {
                    this.characters = characters;
                }
            )
    }

    openCharacterDialog(character?) {
        character ? this.dialogRef = this.dialog.open(CharacterDialogComponent, {data: {character: character}})
            : this.dialogRef = this.dialog.open(CharacterDialogComponent, {data: {}});

        this.dialogRef.afterClosed().subscribe((character) => {
            if(character) {
                if(character['delete']) this.characterService.deleteObject(character)
                    .then(
                        result => this.loadCharacters()
                    );
                else if(character.id) this.characterService.updateObject(character)
                    .then(
                        activity => this.loadCharacters()
                    );
                else this.characterService.createForPlayer(character, 1)
                        .then(
                            activity => this.loadCharacters()
                        );
            }
        })
    }

    toggleDeceased(character: Character) {
        character.deceased = !character.deceased;
        this.characterService.updateObject(character)
            .then((character: Character) => {
                this.loadCharacters();
            })
    }

    getLevelForEXP(exp) {
        return getLevelForEXP(exp);
    }

}
