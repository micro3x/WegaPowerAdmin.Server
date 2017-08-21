import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService } from './_services/index';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(
    // private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService) { }

  name = 'WegaPower Administration Module';
}
