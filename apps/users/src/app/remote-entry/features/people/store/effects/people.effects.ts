import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { PeopleService } from '../../services/people.service';
import { loadCreatePerson, loadCreatePersonError, loadCreatePersonSuccess } from '../actions/create-person.actions';
import { addPersonCreatedSuccess, loadPeople, loadPersonError, loadPersonSuccess } from '../actions/person.actions';


@Injectable()
export class PeopleEffects {

    loadPeople$ = createEffect(() => this.actions$.pipe(
        ofType(loadPeople),
        mergeMap(() => this._people.getPeople()
            .pipe(
                map(people => {
                    console.log(people);
                    return loadPersonSuccess({ people })
                }),
                catchError(error => of(loadPersonError({ payload: error }))
                ))
        )
    ));

    createPeople$ = createEffect(() => this.actions$.pipe(
        ofType(loadCreatePerson),
        mergeMap(({ data }) => this._people.saveUser(data)
            .pipe(
                mergeMap(person => [loadCreatePersonSuccess({ person }), loadPeople()]),
                catchError(error => of(loadCreatePersonError({ payload: error }))
                ))
        )
    ));

    constructor(
        private actions$: Actions,
        private _people: PeopleService
    ) { }
}