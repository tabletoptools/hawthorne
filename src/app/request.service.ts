import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../environments/environment";
import {getToken} from "./SecurityHelper";

@Injectable()
export class RequestService {

    constructor(protected http: HttpClient) {
    }

    sendAdventurerApplication(application) {
        return new Promise(
            (resolve, reject) => this.http.post(environment.serverBase + "/request/adventurer-registration", application, {
                headers: new HttpHeaders({
                    'Authorization': 'Bearer ' + getToken()
                })
            }).subscribe(
                () => resolve(true),
                (error) => reject(error)
            )
        )
    }

}
