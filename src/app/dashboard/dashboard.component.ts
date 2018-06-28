import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {BotService} from "../bot.service";
import {interval, Observable, timer} from "rxjs";

@Component({
    selector: 'ttt-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    roles;

    constructor(private service: BotService, private router: Router) {

    }

    ngOnInit() {

        this.updateRoles();
        interval(5000).subscribe(n => this.updateRoles());

    }

    updateRoles() {
        this.service.getRoles().then(roles => {
                this.roles = roles;
            })
    }

    calculateRowCount() {

        if (window.innerWidth > 650) return 3;
        else return 2;
    }

    route(route: string[]) {
        this.router.navigate(route)
    }

    isInRole(role) {
        return this.roles[role] != undefined;
    }

    isNotInRole(role) {
        return this.roles[role] == undefined;
    }

}
