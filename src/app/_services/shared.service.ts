import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from '../models/index';

@Injectable()
export class SharedService {
    
    // private loggedUser = new Subject<User>();
    private loggedUser = new BehaviorSubject<User>(null);

    currentUser = this.loggedUser.asObservable();
    
    userLogin(user: User){
        this.loggedUser.next(user);
    }

    userLogout(){
        this.loggedUser.next(null);
    }

}