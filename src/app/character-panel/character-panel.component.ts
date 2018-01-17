import {Component, OnInit} from '@angular/core';
import {Activity, ActivityType, Character, getLevelForEXP, Session} from "../Model";
import {MatDialog} from "@angular/material";
import {CharacterService} from "../character.service";
import {CharacterDialogComponent} from "./character-dialog/character-dialog.component";
import {ActivityService} from "../activity.service";

@Component({
    selector: 'ttt-character-panel',
    templateUrl: './character-panel.component.html',
    styleUrls: ['./character-panel.component.css']
})
export class CharacterPanelComponent implements OnInit {

    characters: Character[] = [];
    dialogRef;
    activities: Activity[] = [];

    constructor(private dialog: MatDialog, private characterService: CharacterService, private activityService: ActivityService) {
    }

    ngOnInit() {
        this.loadCharacters();
    }

    loadCharacters() {
        this.characterService.getForPlayer(1)
            .then(
                (characters: Character[]) => {
                    this.characters = characters;
                    this.characters.forEach((character: Character) => {
                        this.activityService.getObjects().then(
                            (activities: Activity[]) => {
                                this.activities = activities;
                            }
                        )
                    })
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

    getTotalExpForCharacter(character: Character): number {
        return (+this.activities
            .filter(activity => activity.character.id === character.id && activity.type === ActivityType.SESSION)
            .map(activity => +(activity as Session).exp)
            .reduce((total, exp) => total + exp, 0)) + character.exp;
    }

    getGoldForCharacter(character: Character): number {
        return (
            (+this.activities
            .filter(activity => activity.character.id === character.id && (activity.type === ActivityType.SESSION || activity.type === ActivityType.GOLD))
                .map(activity => +activity.money)
                .reduce((total, money) => total + money, 0) + character.money)
            - (+this.activities
                .filter(activity => activity.character.id === character.id && !(activity.type === ActivityType.SESSION || activity.type === ActivityType.GOLD))
                .map(activity => +activity.money)
                .reduce((total, money) => total + money, 0))
        )
    }

    getDTP(): number {
        return (
            (+this.activities
                .filter(activity => activity.type === ActivityType.SESSION)
                .map(activity => +activity.dtp)
                .reduce((total, dtp) => total + dtp, 0))
            - (+this.activities
                .filter(activity => activity.type !== ActivityType.SESSION)
                .map(activity => +activity.dtp)
                .reduce((total, dtp) => total + dtp, 0))
        )
    }

}
