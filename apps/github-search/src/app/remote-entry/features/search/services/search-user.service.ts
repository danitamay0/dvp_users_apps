import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { SearchUserApiService } from '../api/search-user.api';

@Injectable({
    providedIn: 'root'
})
export class SearchUserService {

    constructor(private userApi: SearchUserApiService) {

    }

    getUsers(user: string) {
        return this.userApi.getUsers(user).pipe(map(data=>{
                return data.items
        }))
    }

    saveUser(user: string, password: string) {
        /*  return   this.userApi.saveUser(user,password) */
    }

}