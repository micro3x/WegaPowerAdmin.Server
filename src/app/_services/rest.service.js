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
var RestService = (function () {
    //'ContentType': 'application/json'
    function RestService(http, appSettings, sharedService) {
        var _this = this;
        this.http = http;
        this.appSettings = appSettings;
        this.sharedService = sharedService;
        this.headers = new http_1.Headers();
        this.headers.append("X-Parse-Application-Id", appSettings.appId);
        this.baseUrl = appSettings.basePath;
        this.sharedService.currentUser.subscribe(function (user) {
            _this.sessionToken = user.sessionToken;
        });
        this.headers.append("X-Parse-Session-Token", this.sessionToken);
    }
    RestService.prototype.get = function (path, queryString) {
        return this.http.get(this.baseUrl + path + (queryString || ''), { headers: this.headers });
    };
    RestService.prototype.post = function (path, body, queryString) {
        if (!this.headers.get("ContentType")) {
            this.headers.append("ContentType", "application/json");
        }
        return this.http.post(this.baseUrl + path + (queryString || ""), JSON.stringify(body), { headers: this.headers });
    };
    RestService.prototype.put = function (path, body, queryString) {
        if (!this.headers.get("ContentType")) {
            this.headers.append("ContentType", "application/json");
        }
        return this.http.put(this.baseUrl + path + (queryString || ''), JSON.stringify(body), { headers: this.headers });
    };
    return RestService;
}());
RestService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        app_settings_1.AppSettings,
        shared_service_1.SharedService])
], RestService);
exports.RestService = RestService;
//# sourceMappingURL=rest.service.js.map