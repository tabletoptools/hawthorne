import {Component, OnInit, ViewChild} from '@angular/core';
import {AppForm} from "../../AppForm";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-session-form',
  templateUrl: './session-form.component.html',
  styleUrls: ['./session-form.component.css']
})
export class SessionFormComponent extends AppForm implements OnInit {

    @Input()
    model: Session;

    @ViewChild('form')
    form: NgForm;

  constructor() {
      super();
  }

  ngOnInit() {
  }

}
