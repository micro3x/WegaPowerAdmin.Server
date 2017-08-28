import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/index';
import { AuthenticationService } from '../_services/index';

@Component({
    selector: 'nav-menu',
    templateUrl: './nav.menu.component.html'
})
export class NavMenu implements OnInit {
    @Input() currentUser: User;

    navLinks = [
        { title: "Home", path: "/" },
        { title: "Reports", path: "/" },
        { title: "Users", path: "/useradmin" },
    ];

    constructor(
        private authenticationService: AuthenticationService,
        private router: Router) { }


    userLogout() {
        this.authenticationService.logout();
        this.router.navigate(['/login'])
    }

    ngOnInit() {
        // this.currentUser = this.authenticationService.currentUser;
    }

}