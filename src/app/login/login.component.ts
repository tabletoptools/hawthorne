import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {isLoggedIn, removeToken, setToken} from "../SecurityHelper";
import {BotService} from "../bot.service";
import {environment} from "../../environments/environment";

@Component({
    selector: 'ttt-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    code: string = "";
    inHawthorne: boolean = false;
    user = {};
    inviteClicked = false;
    roles = [];

    constructor(public route: ActivatedRoute, public router: Router, public botService: BotService) {
    }

    ngOnInit() {
        let snapshot = this.route.snapshot;
        this.code = snapshot.queryParamMap.get("access_token");
        if (snapshot.queryParamMap.has("access_token")) {
            setToken(snapshot.queryParamMap.get("access_token"), +snapshot.queryParamMap.get("expires_in"))
            //this.router.navigate(['app', 'dashboard']);
        }
        if (isLoggedIn()) {
            this.botService.getUser().then(user => this.user = user);
            this.botService.isInHawthorne().then((result: boolean) => {
                this.inHawthorne = result;
                if(result) this.botService.getRoles().then((roles: any[]) => {
                    this.roles = roles;
                    console.log(roles);
                    this.router.navigate(['app', 'dashboard']);
                });
            })
            //Check if user is in guild
            //this.router.navigate(['app', 'dashboard']);
        }
    }

    loggedIn() {
        return isLoggedIn();
    }

    refreshGuildStatus() {
        this.botService.isInHawthorne().then((result: boolean) => this.inHawthorne = result)
    }

    getLoginLink() {
        return environment.loginURL;
    }

    logout() {
        removeToken();
    }

}
