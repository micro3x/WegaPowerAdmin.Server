"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var shared_service_1 = require("../_services/shared.service");
require("rxjs/add/operator/map");
var RoleGuard = (function () {
    function RoleGuard(router, sharedService) {
        this.router = router;
        this.sharedService = sharedService;
        // this.sharedService.currentUser.subscribe(
        //     user => {
        //         this.currentUser = user;
        //     }
        // )
    }
    RoleGuard.prototype.canActivate = function (route, state) {
        return this.sharedService.currentUser.map(function (user) {
            if (user.sessionToken) {
                return true;
            }
        }).first();
        // return subject.asObservable();
        // if (this.currentUser) {
        //     // logged in so return true
        //     return true;
        // }
        // // not logged in so redirect to login page with the return url
        // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        // return false;
    };
    return RoleGuard;
}());
RoleGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router,
        shared_service_1.SharedService])
], RoleGuard);
exports.RoleGuard = RoleGuard;
//# sourceMappingURL=role.guard.js.map