import { createSelector } from '@ngrx/store';
import { selectUser, selectFetching, selectErrorMessage } from '../reducers/createUser.feature';

export const selectCreateUserFeaure = createSelector(
    selectUser, selectFetching, selectErrorMessage,
    (users, fetching, errorMessage) => ({ users, fetching, errorMessage })
);
