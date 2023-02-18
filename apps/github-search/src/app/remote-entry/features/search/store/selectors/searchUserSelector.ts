import { createSelector } from '@ngrx/store';
import { selectUsers, selectFetching, selectErrorMessage } from '../reducers/search-user.feature';

export const selectCreateUserFeaure = createSelector(
    selectUsers, selectFetching, selectErrorMessage,
    (users, fetching, errorMessage) => ({ users, fetching, errorMessage })
);
