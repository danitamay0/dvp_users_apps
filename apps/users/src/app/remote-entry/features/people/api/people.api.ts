import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'apps/users/src/environments/environment';
import { IPerson, IPersonCreate } from '../interfaces/IPerson';
import { PeopleRequest } from '../interfaces/IPeopleReqst';

@Injectable({
    providedIn: 'root'
})
export class PeopleApiService {

    constructor(private http: HttpClient) {

    }

    getPeople() {
        return this.http.get<PeopleRequest>(`${environment.proxyUrl}/person/list`)
    }

    savePerson(data: IPersonCreate) {
        return this.http.post<IPerson>(`${environment.proxyUrl}/person/save`, data)
    }

}