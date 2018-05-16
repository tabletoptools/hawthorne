import {Component, OnInit} from '@angular/core';
import {isLoggedIn, removeToken} from "../SecurityHelper";
import {environment} from "../../environments/environment";
import {BotService} from "../bot.service";
import {User} from "../Model";

@Component({
    selector: 'ttt-user-display',
    templateUrl: './user-display.component.html',
    styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent implements OnInit {

    avatarURL = "";
    user: User = {} as User;

    constructor(private botService: BotService) {
    }

    ngOnInit() {

        this.botService.getUser().then((user: User) => {
            this.user = user;
            this.avatarURL = "https://cdn.discordapp.com/" + "avatars/"+ this.user.id +"/"+ this.user.avatar +".png?size=256";
        });

    }

    loggedIn() {
        return isLoggedIn();
    }

    getLoginURL() {
        return environment.loginURL;
    }

    logout() {
        removeToken();
    }

}
