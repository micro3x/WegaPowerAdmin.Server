import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SharedService } from '../_services/shared.service';

@Injectable()
export class AuthGuard implements CanActivate {

    private currentUser: any;

    constructor(
        private router: Router,
        private sharedService: SharedService) {
        this.sharedService.currentUser.subscribe(
            user => {
                this.currentUser = user;
            }
        )
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.sharedService.currentUser.map(
            user => {
                if (user) {
                    if (user.sessionToken) {
                        return true;
                    }
                } else {
                    return false;
                }
            }
        ).first();

        // not logged in so redirect to login page with the return url
        // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        // return false;
    }
}