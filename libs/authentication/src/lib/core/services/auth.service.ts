import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { map } from 'rxjs';
import { AuthApiService } from '../api/auth.api';
import { Apps, IApps } from '../enum/apps-enum';
import { ILogin } from '../interfaces/ILogin';

@Injectable()
export class AuthService {
    constructor(private _authApi:AuthApiService, private cookieService:CookieService){}
    logIn(uri:string,data:ILogin){
        return this._authApi.logIn(uri,data).pipe(map((r:any)=>{
            if (r?.success) {
                this.cookieService.set('token',r.result);
                return{logged:true}
            }
            return {logged:false}
        }))
    }

    logOut(){
        this.cookieService.delete('token');
        window.location.href = 'http://localhost:4201/'
    }

    isLoggedIn(){
        return  this.cookieService.get('token') ? true : false
    }

    getApps(){
        return Apps
    }
}