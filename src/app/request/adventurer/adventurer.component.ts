import {Component, OnInit, EventEmitter} from '@angular/core';
import {AppForm} from "../../../AppForm";
import {Router} from '@angular/router'
import {NgForm} from "@angular/forms";
import {AdventurerRegistration} from "../../Model";
import {Input, Output, ViewChild} from '@angular/core';
import {RequestService} from "../../request.service";

@Component({
    selector: 'ttt-adventurer',
    templateUrl: './adventurer.component.html',
    styleUrls: ['./adventurer.component.css']
})
export class AdventurerComponent implements OnInit {

    @Input()
    model: AdventurerRegistration = {} as AdventurerRegistration;
    @Output()
    modelChange: EventEmitter<AdventurerRegistration>;
    @ViewChild('form')
    form: NgForm;

    @Input()
    disabled: string[] = [];

    @Input()
    required: string[] = [];

    @Input()
    blacklist: string[] = [];

    constructor(private service: RequestService, private router: Router) {
    }

    ngOnInit() {
    }

    isInBlacklist(field) {
        return (
            this.blacklist.includes(field)
            || this.blacklist.includes('*')
        );
    }

    isDisabled(field) {
        return (
            this.disabled.includes(field)
            || this.disabled.includes('*')
        );
    }

    isRequired(field) {
        return (
            this.required.includes(field)
            || this.required.includes('*')
        );
    }

    isValid() {
        return !this.form.invalid;
    }

    log(event) {
        console.log(event)
    }

    submit(model) {
        this.service.sendAdventurerApplication(model)
            .then(success => {
                    this.router.navigate(['app', "dashboard"]);
                },
                error => {
                    this.router.navigate(['app', 'dashboard'])
                })
    }

}
