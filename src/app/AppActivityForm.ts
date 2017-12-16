import {AppForm} from "../AppForm";
import {Character, Player} from "./Model";
import {CharacterService} from "./character.service";
import {Input} from "@angular/core";
import {PlayerService} from "./player.service";
import {CharacterDialogComponent} from "./character-panel/character-dialog/character-dialog.component";
import {MatDialog} from "@angular/material";

export abstract class TTTCharacterDependentForm extends AppForm {
    protected characters: Character[] = [];

    @Input()
    playerId: number;

    private player: Player;

    dialogRef;

    abstract characterService: CharacterService;
    abstract playerService: PlayerService;
    abstract dialog: MatDialog

    constructor() {
        super();
    }

    getCharacters(fresh: boolean = true): Promise<Character[]> {
        return new Promise(
            (resolve) => {
                if(!this.player) {
                    if (!this.playerId) this.playerService.getDefault().then((player: Player) => {
                        this.player = player;
                        if(this.characters && !fresh) return Promise.resolve(this.characters);
                        else this.characterService.getForPlayer(this.player.id).then((characters: Character[]) => {
                            this.characters = characters;
                            resolve(this.characters)
                        })
                    });
                    else this.playerService.getObject(this.playerId).then((player: Player) => {
                        this.player = player;
                        if(this.characters && !fresh) return Promise.resolve(this.characters);
                        else this.characterService.getForPlayer(this.player.id).then((characters: Character[]) => {
                            this.characters = characters;
                            resolve(this.characters)
                        })
                    })
                }
                else {
                    if (this.characters && !fresh) return Promise.resolve(this.characters);
                    else this.characterService.getForPlayer(this.player.id).then((characters: Character[]) => {
                        this.characters = characters;
                        resolve(this.characters)
                    })
                }

            }
        )

    }

    openCharacterDialog() {
        this.dialogRef = this.dialog.open(CharacterDialogComponent, {data: {id: 'newCharacter'}});

        this.dialogRef.afterClosed().subscribe((character) => {
            if(character) {
                this.characterService.createForPlayer(character, 1)
                        .then(
                            character => this.getCharacters(true).then((characters) => this.characters = characters)
                        );
            }
        })
    }

    compareFunction(char1: Character, char2: Character) {

        return (char1 && char2 && char1.id && char2.id && char1.id === char2.id);
    }

}
