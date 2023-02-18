import { createAction, props } from '@ngrx/store';
import { IUser } from '../../interfaces/IUser';

export const loadUsers = createAction(
    '[Users Page] LoadUsers',
);

export const loadUsersSuccess = createAction(
    '[Users Page] LoadUsers Success',
    props<{ users: IUser[] }>()
);

export const addUsersCreatedSuccess = createAction(
    '[Users Page] AddUserCreated Success',
    props<{ user: IUser}>()
);
export const loadUsersError = createAction(
    '[Users Page] LoadUsers Error',
    props<{ payload: any }>()
);