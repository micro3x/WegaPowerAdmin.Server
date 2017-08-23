import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { AppSettings } from '../app.settings'
import { User } from '../models/index'

@Injectable()
export class AuthenticationService {
    headers = new Headers();
    currentUser: User;

    constructor(private http: Http,
        private appSettings: AppSettings
    ) {
        this.headers.append("X-Parse-Application-Id", appSettings.appId);
    }

    login(username: string, password: string) {
        return this.http.get(this.appSettings.basePath + "login?username=" + username + "&password=" + password,
            { headers: this.headers })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.sessionToken) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    this.currentUser = user as User;
                    
                    localStorage.setItem('currentUser', JSON.stringify(user));

                    return user;
                }
                return null;
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}