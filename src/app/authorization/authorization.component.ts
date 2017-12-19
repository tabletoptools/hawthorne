import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Params, Router} from "@angular/router";

@Component({
  selector: 'ttt-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
      this.route.queryParamMap.subscribe(
          (paramMap: ParamMap) => {
              const authToken = paramMap.get('code');
              console.log(authToken);
              if(!authToken) return;
              localStorage.setItem('code', authToken);
              this.router.navigate(['/app/activities'])
          }
      )
  }

}
