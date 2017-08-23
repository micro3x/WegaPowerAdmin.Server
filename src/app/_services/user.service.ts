import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { User } from '../models/index';

@Injectable()
export class UserService {
    
    private loggedUser = new Subject<User>();

    currentUser = this.loggedUser.asObservable();

    userLogin(user : User){
        this.loggedUser.next(user);
    }

}