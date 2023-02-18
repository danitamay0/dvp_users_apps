import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'apps/users/src/environments/environment';
import { UserApiService } from '../api/user.api';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private userApi:UserApiService){

    }

    getUsers(){
        return  this.userApi.getUsers()
    }

    saveUser(user:string,password:string){
        return   this.userApi.saveUser(user,password)
    }
   
}