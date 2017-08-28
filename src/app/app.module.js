"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
//Main App Components
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var app_settings_1 = require("./app.settings");
//Custom modules
var user_admin_module_1 = require("./userAdmin/user.admin.module");
//Guards
var index_1 = require("./_guards/index");
//Components
var index_2 = require("./_directives/index");
var index_3 = require("./login/index");
var index_4 = require("./home/index");
//Services
var index_5 = require("./_services/index");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routing_1.routing,
            user_admin_module_1.UserAdminModule
        ],
        declarations: [
            app_component_1.AppComponent,
            index_2.AlertComponent,
            index_3.LoginComponent,
            index_4.HomeComponent,
            index_4.NavMenu
        ],
        providers: [
            app_settings_1.AppSettings,
            index_5.AlertService,
            index_5.AuthenticationService,
            index_5.RestService,
            index_1.AuthGuard,
            index_1.RoleGuard,
            index_5.SharedService,
            { provide: core_1.APP_INITIALIZER, useFactory: function (config) { return function () { return config.currentUser; }; }, deps: [index_5.SharedService], multi: true }
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map