import { Component, Input, OnInit } from '@angular/core';
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

    constructor(private authenticationService: AuthenticationService) {

    }

    ngOnInit() {
        // this.currentUser = this.authenticationService.currentUser;
    }

}