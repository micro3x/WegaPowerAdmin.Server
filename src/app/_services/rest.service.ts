import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { AppSettings } from '../app.settings'

@Injectable()
export class RestService {
    headers = new Headers();
    sessionToken: string;
    baseUrl: string;

    //'ContentType': 'application/json'

    constructor(private http: Http, private appSettings: AppSettings) {
        this.headers.append("X-Parse-Application-Id", appSettings.appId);
        this.baseUrl = appSettings.basePath;
        this.sessionToken = JSON.parse(localStorage.getItem("currentUser")).sessionToken;
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