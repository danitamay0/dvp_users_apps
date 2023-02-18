import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'apps/users/src/environments/environment';
import { IUser } from '../interfaces/IUser';

@Injectable({
    providedIn: 'root'
})
export class UserApiService {

    constructor(private http: HttpClient) {

    }

    getUsers() {
        return this.http.get<IUser[]>(`${environment.proxyUrl}/user/list`)
    }

    saveUser(user: string, password: string) {
        return this.http.post<IUser>(`${environment.proxyUrl}/user/create`, { user, password })
    }

}