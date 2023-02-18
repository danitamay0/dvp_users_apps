import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { PeopleApiService } from '../api/people.api';
import { IPerson, IPersonCreate } from '../interfaces/IPerson';

@Injectable({
    providedIn: 'root'
})
export class PeopleService {

    constructor(private _people: PeopleApiService) {

    }

    getPeople() {
        return this._people.getPeople().pipe(map((r): IPerson[] =>
            r?.result ?
                r.result.map(person => {
                    let p: IPerson = {
                        email: person.email,
                        firstName: person.first_name,
                        identifier: '123',
                        lastName: person.last_name,
                        typeIdentifier: person.type_identifier,
                        fullIdentifier:person.full_identifier,
                        fullName:person.full_name
                    }
                    return p
                }) : []
        ))
    }

    saveUser(data: IPersonCreate) {
        return this._people.savePerson(data)
    }

}