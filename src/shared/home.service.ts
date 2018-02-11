import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/observable/from';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';


@Injectable()
export class HomeService {

    _url = 'https://api.github.com/users/';
 
    constructor(public http: HttpClient ){
    
    }

    getRepos(username) {
        const url = this._url + username + '/repos';
        // return Observable.from(this.http.get(url)); 
        return new Observable((o: Observer <any>) => {
            this.http.get(url).subscribe((data:any[])=>{
                o.next(data);
                o.complete();
            });
        });
    }
}
//II NACIN
