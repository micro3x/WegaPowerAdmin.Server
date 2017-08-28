import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, SharedService } from './_services/index';

import { User } from './models/index';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {

  currentUser: User;

  constructor(
    // private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
    public userService: SharedService) {
    this.userService.currentUser.subscribe(userData => {
      this.currentUser = userData;
    })
  }

  name = 'WegaPower Administration';
}
