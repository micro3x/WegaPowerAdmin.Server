"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var user_admin_component_1 = require("./user.admin.component");
var index_1 = require("../_services/index");
var UserAdminModule = (function () {
    function UserAdminModule() {
    }
    return UserAdminModule;
}());
UserAdminModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
        ],
        declarations: [
            user_admin_component_1.UserAdminComponent
        ],
        providers: [
            index_1.UserService
        ],
        exports: [
            user_admin_component_1.UserAdminComponent
        ]
    })
], UserAdminModule);
exports.UserAdminModule = UserAdminModule;
//# sourceMappingURL=user.admin.module.js.map