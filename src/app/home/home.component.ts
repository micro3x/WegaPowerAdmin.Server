import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../_services/index';

import { User } from '../models/index'

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})
export class HomeComponent {
    name = "Welcome Home"
    current: any;
    
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) {
        this.current = 'Home';
    }

    users() {
        this.router.navigate(['home/useradmin']);
        this.current = "Users"
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['login']);
        this.current = "Logout"
    }

    home() {
        this.router.navigate(['home']);
        this.current = "Home"
    }
}