import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/index';
import { AuthGuard, RoleGuard } from './_guards/index';
import { UserAdminComponent } from './userAdmin/user.admin.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
        // children: [
        //     { path: 'useradmin', outlet: 'main', component: UserAdminComponent, canActivate: [RoleGuard] }
        // ]
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard],
        children: [
            // {path:'',redirectTo:'home', pathMatch: 'full'},
            // { path: 'useradmin', component: UserAdminComponent, canActivate: [RoleGuard] }
        ]
    },
    {
        path: 'useradmin',
        component: UserAdminComponent,
        canActivate: [RoleGuard]
    },
    // { path: 'useradmin', outlet: 'main', component: UserAdminComponent, canActivate: [RoleGuard] },
    { path: 'login', component: LoginComponent },
    // { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);