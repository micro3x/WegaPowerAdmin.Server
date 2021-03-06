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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var app_settings_1 = require("../app.settings");
var shared_service_1 = require("./shared.service");
var AuthenticationService = (function () {
    function AuthenticationService(http, appSettings, sharedService) {
        this.http = http;
        this.appSettings = appSettings;
        this.sharedService = sharedService;
        this.headers = new http_1.Headers();
        this.headers.append("X-Parse-Application-Id", appSettings.appId);
    }
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.get(this.appSettings.basePath + "login?username=" + username + "&password=" + password, { headers: this.headers })
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var user = response.json();
            if (user && user.sessionToken) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                _this.currentUser = user;
                _this.sharedService.userLogin(_this.currentUser);
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        this.sharedService.userLogout();
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        app_settings_1.AppSettings,
        shared_service_1.SharedService])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=auth.service.js.map