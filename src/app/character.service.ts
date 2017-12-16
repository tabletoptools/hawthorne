import {Injectable} from '@angular/core';
import {AbstractResourceArrayService} from "../AbstractResourceArrayService";
import {Character} from "./Model";

@Injectable()
export class CharacterService extends AbstractResourceArrayService {

    type: string = "characters";

    constructor() {
        super();
    }

    createForPlayer(character: Character, playerId) {
        character.playerId = playerId;
        return new Promise(
            (resolve) => {
                this.createObject(character).then(
                    (character) => resolve(character)
                )
            }
        )
    }

    getForPlayer(playerId) {
        return new Promise(
            (resolve) => {
                this.getObjects().then(
                    (characters: Character[]) => resolve(characters.find((char) => char.playerId === playerId) ?
                        characters.filter((char) => char.playerId === playerId)
                        : [])
                )
            }
        )
    }

}
