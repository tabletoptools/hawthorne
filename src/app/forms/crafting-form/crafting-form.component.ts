import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {AppForm} from "../../../AppForm";
import {NgForm} from "@angular/forms";
import {Crafting} from "../../Model";

@Component({
  selector: 'ttt-crafting-form',
  templateUrl: './crafting-form.component.html',
  styleUrls: ['./crafting-form.component.css']
})
export class CraftingFormComponent extends AppForm implements OnInit {

    @Input()
    model: Crafting = {} as Crafting;

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
