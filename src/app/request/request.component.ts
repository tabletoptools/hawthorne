import { Component, OnInit } from '@angular/core';
import {Request} from "../Model";

@Component({
  selector: 'ttt-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

    model: Request = {} as Request;

  constructor() { }

  ngOnInit() {
  }

}
