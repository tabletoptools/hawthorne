import {Injectable} from '@angular/core';
import {environment} from "../environments/environment";
import {PersistenceType} from "../PersistenceType";
import {Activity, Character} from "./Model";
import {AbstractResourceArrayService} from "../AbstractResourceArrayService";

@Injectable()
export class ActivityService extends AbstractResourceArrayService {

    type: string = "activities";

    constructor() {
        super();
    }

    getActivitiesForCharacter(character: Character): Promise<Activity[]> {
        return new Promise(
            (resolve) => {
                this.getObjects().then(
                    (activities: Activity[]) => resolve(activities.filter((activity) => activity.character.id === character.id))
                )
            }
        )
    }

}
