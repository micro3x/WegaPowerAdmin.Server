import { Injectable, Inject } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppSettings } from '../app.settings';
import { SharedService } from './shared.service';

@Injectable()
export class RestService {
    headers = new Headers();
    sessionToken: string;
    baseUrl: string;

    //'ContentType': 'application/json'

    constructor(
        private http: Http,
        private appSettings: AppSettings,
        private sharedService: SharedService) {
        this.headers.append("X-Parse-Application-Id", appSettings.appId);
        this.baseUrl = appSettings.basePath;
        this.sharedService.currentUser.subscribe(
            user => {
                this.sessionToken = user.sessionToken;
            }
        )
        this.headers.append("X-Parse-Session-Token", this.sessionToken);
    }

    get(path: string, queryString?: string) {
        return this.http.get(this.baseUrl + path + (queryString || ''), { headers: this.headers });
    }

    post(path: string, body: any, queryString?: string) {
        if (!this.headers.get("ContentType")) {
            this.headers.append("ContentType", "application/json");
        }
        return this.http.post(this.baseUrl + path + (queryString || ""), JSON.stringify(body), { headers: this.headers });
    }

    put(path: string, body: any, queryString?: string) {
        if (!this.headers.get("ContentType")) {
            this.headers.append("ContentType", "application/json");
        }
        return this.http.put(this.baseUrl + path + (queryString || ''), JSON.stringify(body), { headers: this.headers });
    }
}