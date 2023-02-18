import { createAction, props } from '@ngrx/store';
import { IRequestGithub,Item } from '../../interfaces/gitHubUsers';

export const loadSearchUsers = createAction(
    '[Users Page] LoadUsers',
    props<{ user:string }>()

);

export const loadSearchUsersSuccess = createAction(
    '[Users Page] loadSearchUsers Success',
    props<{ users: Item[] }>()
);

export const loadSearchUsersError = createAction(
    '[Users Page] loadSearchUsers Error',
    props<{ payload: any }>()
);