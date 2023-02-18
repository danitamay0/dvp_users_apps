import { createSelector } from '@ngrx/store';
import { selectUsers,selectFetching } from '../reducers/users.feature';

export const selectUsersFeaure = createSelector(
    selectUsers,selectFetching,
    (users,fetching) => ({ users , fetching})
);
