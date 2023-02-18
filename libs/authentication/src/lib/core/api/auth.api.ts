import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILogin } from '../interfaces/ILogin';

@Injectable()
export class AuthApiService {
    constructor(private http:HttpClient){
    }
    logIn(uri:string,data:ILogin){
        return this.http.post(uri,{...data})
    }
}