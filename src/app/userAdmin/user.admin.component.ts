import { Component } from '@angular/core';
import { User } from '../models/index'

@Component({
    selector: 'user-administration',
    templateUrl: './user.admin.component.html'
})
export class UserAdminComponent {
    me = JSON.parse(localStorage.getItem("currentUser")) as User;

    constructor(){

    }

}