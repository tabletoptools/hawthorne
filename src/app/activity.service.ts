import {Injectable} from '@angular/core';
import {environment} from "../environments/environment";
import {PersistenceType} from "../PersistenceType";
import {Activity} from "./Model";

@Injectable()
export class ActivityService {

    constructor() {
    }

    getNextActivityID(): Promise<number> {
        return new Promise(
            (resolve) => {
                this.getActivities().then(
                    (result: Activity[]) => {
                        if (result.length === 0) resolve(1);
                        else resolve(Math.max(...result.map((obj => obj.id))) + 1);
                    }
                )
            }
        )
    }

    getActivities(id?): Promise<Activity[]> {
        if (environment.persistence === PersistenceType.REMOTE && id) {
            console.log("Remote Persistence Type is not yet implemented.");
            return Promise.reject(null);
        }
        else {
            let activities: Activity[] = localStorage.getItem("activities") ? JSON.parse(localStorage.getItem("activities")) : [];
            if (activities.length === 0) localStorage.setItem("activities", JSON.stringify([]));
            return Promise.resolve(activities);
        }

    }

    getActivity(id): Promise<Activity> {
        return new Promise(
            (resolve) => {
                this.getActivities()
                    .then(
                        (activities: Activity[]) => {
                            resolve(activities.find(activity => activity.id === id))
                        }
                    )
            }
        )
    }

    createActivity(activity: Activity): Promise<Activity> {
        return new Promise(
            (resolve) => {
                this.getNextActivityID().then(
                    id => {
                        activity.id = id;
                        this.getActivities()
                            .then(
                                (activities) => {
                                    activities.push(activity);
                                    this.setActivities(activities)
                                        .then(
                                            activities => resolve(activity)
                                        )
                                }
                            )

                    }
                )
            }
        )
    }

    setActivities(activities): Promise<Activity[]> {
        return new Promise(
            (resolve) => {
                window.localStorage.setItem("activities", JSON.stringify(activities));
                resolve(activities);
            }
        )
    }

    updateActivity(activity): Promise<Activity> {

        return new Promise(
            (resolve) => {
                this.getActivities().then(
                    (activities: Activity[]) => {
                        activities[activities.indexOf(activities.find(a => a.id === activity.id))] = activity;
                        this.setActivities(activities).then(
                            (newActivities) => resolve(activity)
                        )

                    }
                )
            }
        )
    }

    deleteActivity(activity): Promise<boolean> {
        return new Promise(
            (resolve) => {
                this.getActivities().then(
                    (activities: Activity[]) => {
                        activities.splice(activities.indexOf(activities.find(a => a.id === activity.id)), 1);
                        this.setActivities(activities).then(
                            (activities) => resolve(true)
                        )
                    }
                )
            }
        )
    }

}
