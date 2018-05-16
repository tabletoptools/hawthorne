import {Component, OnInit} from '@angular/core';
import {environment} from "../../environments/environment";

@Component({
    selector: 'ttt-hawthorne-container',
    templateUrl: './hawthorne-container.component.html',
    styleUrls: ['./hawthorne-container.component.css']
})
export class HawthorneContainerComponent implements OnInit {

    version = environment.version;

    constructor() {
    }

    ngOnInit() {
    }

}
