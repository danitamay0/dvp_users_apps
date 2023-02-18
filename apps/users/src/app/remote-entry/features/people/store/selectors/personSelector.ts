import { createSelector } from '@ngrx/store';
import { selectPeople,selectFetching } from '../reducers/person.feature';

export const selectPeopleFeaure = createSelector(
    selectPeople,selectFetching,
    (people,fetching) => ({ people , fetching})
);
