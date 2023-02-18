import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { loadCreateUsers, loadCreateUsersError, loadCreateUsersSuccess } from '../actions/create-user.actions';
import { addUsersCreatedSuccess, loadUsers, loadUsersError, loadUsersSuccess } from '../actions/user.actions';

@Injectable()
export class UsersEffects {

    loadUsers$ = createEffect(() => this.actions$.pipe(
        ofType(loadUsers),
        mergeMap(() => this._user.getUsers()
            .pipe(
                map(users => loadUsersSuccess({ users })),
                catchError(error => of(loadUsersError({ payload: error }))
                ))
        )
    ));

    createUsers$ = createEffect(() => this.actions$.pipe(
        ofType(loadCreateUsers),
        mergeMap(({data}) => this._user.saveUser(data.user,data.password)
            .pipe(
                mergeMap(user => [loadCreateUsersSuccess({ user }),addUsersCreatedSuccess({user})]),
                catchError(error => of(loadCreateUsersError({ payload: error }))
                ))
        )
    ));

    constructor(
        private actions$: Actions,
        private _user: UserService
    ) { }
}