import {Injectable} from '@angular/core';
import {Player} from "./Model";
import {AbstractResourceArrayService} from "../AbstractResourceArrayService";

@Injectable()
export class PlayerService extends AbstractResourceArrayService {

    type: string = "players";

    constructor() {
        super();
    }

    public getDefault(): Promise<Player> {
        return new Promise(
            (resolve) => {
                this.getObjects().then(
                    (players: Player[]) => {
                        if(players.length === 0) this.createObject({} as Player).then(
                            (player) => resolve(player)
                        );
                        else resolve(players[0]);
                    }
                )
            }
        )
    }

}
