import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CanDeactivate } from '@angular/router';
import { UsersComponent } from './users.component';
import { User } from './user';

import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {
    private _url='http://jsonplaceholder.typicode.com/users/';
    constructor(private _http: Http){
    }

    getUsers(): Observable<User []>{
         return this._http.get(this._url)//get the url as observable
            .map(res => res.json()); //convert observable into JSON
    }

    getUser(userId): Observable<User>{
        return this._http.get(this._url+userId)
                .map(res => res.json()); //
    }

    createUser(form){
        return this._http.post(this._url,JSON.stringify(form))//post stringified parameter to url
            .map(res => res.json());
    }

    editUser(userId,form){
        return this._http.put(this._url+userId,JSON.stringify(form))
            .map( res => res.json());
    }
    destroyUser(userId){
        return this._http.delete(this._url+userId)
            .map( res => res.json());
    }
}