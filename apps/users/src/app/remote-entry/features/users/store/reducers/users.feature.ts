import { createFeature, createReducer, on } from '@ngrx/store';
import { TypeFetching } from 'apps/users/src/app/core/interfaces/IFetching';
import { IUser } from '../../interfaces/IUser';

import * as actions from '../actions/user.actions';

interface State {
    users: IUser[];
    fetching: TypeFetching;
}

const initialState: State = {
    users: [],
    fetching: 'iddle',
};

export const usersFeature = createFeature({
    name: 'usersFeature',
    reducer: createReducer(
        initialState,
        on(actions.loadUsers, (state) => ({
            ...state,
            fetching: 'pending',
        })),
        on(actions.loadUsersSuccess, (state, { users }) => ({
            ...state,
            users: [...users],
            fetching: 'succeded',
        })),
        on(actions.addUsersCreatedSuccess, (state, { user }) => ({
            ...state,
            users: [{ ...user }, ...state.users,],
            fetching: 'succeded',
        })),
        on(actions.loadUsersError, (state, { payload }) => ({
            ...state,
            users: [],
            fetching: 'rejected',
        }))
    ),
});

export const {
    name, // feature name
    reducer, // feature reducer
    selectUsers, // selector for `books` property
    selectFetching, // selector for `loading` property
} = usersFeature;