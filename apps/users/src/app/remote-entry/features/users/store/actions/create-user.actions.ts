import { createAction, props } from '@ngrx/store';
import { IUser } from '../../interfaces/IUser';

export const loadCreateUsers = createAction(
    '[Ceate Users Page] LoadUsers',
    props<{ data: {user:string,password:string} }>()

);

export const loadCreateUsersSuccess = createAction(
    '[Ceate Users Page] loadCreateUsers Success',
    props<{ user: IUser }>()
);

export const loadCreateUsersError = createAction(
    '[Ceate Users Page] loadCreateUsers Error',
    props<{ payload: any }>()
);