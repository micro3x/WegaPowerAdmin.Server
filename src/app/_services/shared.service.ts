import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User, Role } from '../models/index';
import { RestService } from './rest.service'

@Injectable()
export class SharedService {

    private loggedUser = new BehaviorSubject<User>(null);
    currentUser = this.loggedUser.asObservable();

    roles: Role[];

    constructor(private restService: RestService) {

    }

    userLogin(user: User) {
        this.loggedUser.next(user);
        this.populateRoles();
    }

    userLogout() {
        this.loggedUser.next(null);
    }

    private populateRoles(){
        this.restService.get('/classes/_Role').map(
            data => {
                console.log(data);
            }
        )
    }

}