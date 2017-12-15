import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {AppForm} from "../../../AppForm";
import {NgForm} from "@angular/forms";
import {Housing} from "../../Model";

@Component({
  selector: 'ttt-housing-form',
  templateUrl: './housing-form.component.html',
  styleUrls: ['./housing-form.component.css']
})
export class HousingFormComponent extends AppForm implements OnInit {

    @Input()
    model: Housing = {} as Housing;

    @Output()
    modelChange = new EventEmitter();

    @ViewChild('form')
    form: NgForm;

  constructor() {
      super();
  }

  ngOnInit() {
  }

}
