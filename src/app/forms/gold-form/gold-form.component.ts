import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {AppForm} from "../../../AppForm";
import {Goldfarming} from "../../Model";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'ttt-gold-form',
  templateUrl: './gold-form.component.html',
  styleUrls: ['./gold-form.component.css']
})
export class GoldFormComponent extends AppForm implements OnInit {

    @Input()
    model: Goldfarming = {} as Goldfarming;

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
