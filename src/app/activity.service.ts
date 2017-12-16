import {Injectable} from '@angular/core';
import {environment} from "../environments/environment";
import {PersistenceType} from "../PersistenceType";
import {Activity} from "./Model";
import {AbstractResourceArrayService} from "../AbstractResourceArrayService";

@Injectable()
export class ActivityService extends AbstractResourceArrayService {

    type: string = "activities";

    constructor() {
        super();
    }


}
