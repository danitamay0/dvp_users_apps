import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRequestGithub } from '../interfaces/gitHubUsers';
import { environment } from 'apps/github-search/src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class SearchUserApiService {

    constructor(private http: HttpClient) {

    }

    getUsers(user: string) {
        return this.http.get<IRequestGithub>(`${environment.proxyUrl}/search/users?q=${user}`)
    }

    /*  saveUser(user: string, password: string) {
         return this.http.post<IRequestGithub>(`${environment.proxyUrl}/user/create`, { user, password })
     } */

}