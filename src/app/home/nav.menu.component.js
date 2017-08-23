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
var index_1 = require("../models/index");
var index_2 = require("../_services/index");
var NavMenu = (function () {
    function NavMenu(authenticationService) {
        this.authenticationService = authenticationService;
        this.navLinks = [
            { title: "Home", path: "/" },
            { title: "Reports", path: "/" },
            { title: "Users", path: "/useradmin" },
        ];
    }
    NavMenu.prototype.ngOnInit = function () {
        // this.currentUser = this.authenticationService.currentUser;
    };
    return NavMenu;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", index_1.User)
], NavMenu.prototype, "currentUser", void 0);
NavMenu = __decorate([
    core_1.Component({
        selector: 'nav-menu',
        templateUrl: './nav.menu.component.html'
    }),
    __metadata("design:paramtypes", [index_2.AuthenticationService])
], NavMenu);
exports.NavMenu = NavMenu;
//# sourceMappingURL=nav.menu.component.js.map