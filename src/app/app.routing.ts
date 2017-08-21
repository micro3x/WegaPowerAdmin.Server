import { Routes, RouterModule } from '@angular/router';

import { HomeModule } from './home/index';
import { LoginComponent } from './login/index';
import { AuthGuard, RoleGuard } from './_guards/index';
// import { UserAdminComponent } from './home/userAdmin/index'

const appRoutes: Routes = [
    {
        path: '',
        component: HomeModule,
        canActivate: [AuthGuard]
        // children: [
        //     { path: 'useradmin', outlet: 'main', component: UserAdminComponent, canActivate: [RoleGuard] }
        // ]
    },
    {
        path: 'home',
        component: HomeModule,
        canActivate: [AuthGuard],
        children: [
            // {path:'',redirectTo:'home', pathMatch: 'full'},
            // { path: 'useradmin', component: UserAdminComponent, canActivate: [RoleGuard] }
        ]
    },
    // { path: 'useradmin', outlet: 'main', component: UserAdminComponent, canActivate: [RoleGuard] },
    { path: 'login', component: LoginComponent },
    // { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);