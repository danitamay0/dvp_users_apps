import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { SearchUserService } from '../../services/search-user.service';
import { loadSearchUsers, loadSearchUsersError, loadSearchUsersSuccess } from '../actions/search-user.actions';

@Injectable()
export class SearchUsersEffects {

    loadUsers$ = createEffect(() => this.actions$.pipe(
        ofType(loadSearchUsers),
        mergeMap(({ user }) => this._userSearch.getUsers(user)
            .pipe(
                map(users => loadSearchUsersSuccess({ users })),
                catchError(error => of(loadSearchUsersError({ payload: error }))
                ))
        )
    ));

    constructor(
        private actions$: Actions,
        private _userSearch: SearchUserService
    ) { }
}