import {Injectable} from '@angular/core';
import {environment} from "../environments/environment";
import {PersistenceType} from "../PersistenceType";
import {Activity} from "./Model";

@Injectable()
export class ActivityService {

    constructor() {
    }

    getNextActivityID(): number {
        return (window.localStorage.length === 0) ? 1 : (+window.localStorage.key(window.localStorage.length-1).split('-')[1])+1;
    }

    getActivities(id?): Promise<Activity[]> {
        if (environment.persistence === PersistenceType.REMOTE && id) {
            console.log("Remote Persistence Type is not yet implemented.");
            return Promise.reject(null);
        }
        else {

            if (window.localStorage.length === 0) return Promise.resolve([]);
            let activities: Activity[] = [];
            for(let x = 0; x < localStorage.length; x++) {
                if(localStorage.key(x).startsWith("activity-")) {
                    activities.push(JSON.parse(localStorage.getItem(localStorage.key(x))))
                }
            }
            return Promise.resolve(activities);
        }

    }

    getActivity(id): Promise<Activity> {
        return Promise.resolve(JSON.parse(window.localStorage.getItem("activity-"+id)));
    }

    createActivity(activity: Activity): Promise<Activity> {
        activity.id = this.getNextActivityID();
        window.localStorage.setItem("activity-"+activity.id, JSON.stringify(activity));
        return Promise.resolve(activity);
    }

    updateActivity(activity): Promise<Activity> {
        let old = JSON.parse(window.localStorage.getItem("activity-"+activity.id));
        let id = old.id;

        Object.assign(old, activity);
        old.id = id;
        window.localStorage.setItem("activity-", JSON.stringify(activity));
        return Promise.resolve(activity);
    }

}
