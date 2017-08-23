"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var index_1 = require("./login/index");
var index_2 = require("./_guards/index");
var user_admin_component_1 = require("./userAdmin/user.admin.component");
var appRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent,
        canActivate: [index_2.AuthGuard]
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent,
        canActivate: [index_2.AuthGuard],
        children: []
    },
    {
        path: 'useradmin',
        component: user_admin_component_1.UserAdminComponent,
        canActivate: [index_2.RoleGuard]
    },
    // { path: 'useradmin', outlet: 'main', component: UserAdminComponent, canActivate: [RoleGuard] },
    { path: 'login', component: index_1.LoginComponent },
    // { path: 'register', component: RegisterComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map