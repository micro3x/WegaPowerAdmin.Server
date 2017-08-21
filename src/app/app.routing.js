"use strict";
var router_1 = require("@angular/router");
var index_1 = require("./home/index");
var index_2 = require("./login/index");
var index_3 = require("./_guards/index");
// import { UserAdminComponent } from './home/userAdmin/index'
var appRoutes = [
    {
        path: '',
        component: index_1.HomeModule,
        canActivate: [index_3.AuthGuard]
    },
    {
        path: 'home',
        component: index_1.HomeModule,
        canActivate: [index_3.AuthGuard],
        children: []
    },
    // { path: 'useradmin', outlet: 'main', component: UserAdminComponent, canActivate: [RoleGuard] },
    { path: 'login', component: index_2.LoginComponent },
    // { path: 'register', component: RegisterComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map