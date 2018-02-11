import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class GitService {

    _url = 'https://api.github.com/users/';
 
    constructor(public http: HttpClient ){
    
    }

    getRepos(username) {
        const url = this._url + username + '/repos';
        return this.http.get(url).toPromise().then((data)=> {
               return data || [] });
              
            
    }
}
//III NACIN
