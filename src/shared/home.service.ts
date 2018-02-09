import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/observable/from';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class HomeService {

    _url = 'https://api.github.com/users/';
     posts;
    constructor(public http: HttpClient ){
    
    }
    getRepos(username) {
        const url = this._url + username + '/repos';
        return Observable.from(this.http.get(url));         
    }
}


