import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAdminComponent } from './user.admin.component';

import { UserService } from '../_services/index';

@NgModule({
    imports: [
        CommonModule,
        
    ],
    declarations: [
        UserAdminComponent
    ],
    providers: [
        UserService
    ],
    exports: [
        UserAdminComponent
    ]
})
export class UserAdminModule { }
