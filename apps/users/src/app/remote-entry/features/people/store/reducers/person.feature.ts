import { createFeature, createReducer, on } from '@ngrx/store';
import { TypeFetching } from 'apps/users/src/app/core/interfaces/IFetching';
import { IPerson } from '../../interfaces/IPerson';

import * as actions from '../actions/person.actions';

interface State {
    people: IPerson[];
    fetching: TypeFetching;
}

const initialState: State = {
    people: [],
    fetching: 'iddle',
};

export const peopleFeature = createFeature({
    name: 'peopleFeature',
    reducer: createReducer(
        initialState,
        on(actions.loadPeople, (state) => ({
            ...state,
            fetching: 'pending',
        })),
        on(actions.loadPersonSuccess, (state, { people }) => ({
            ...state,
            people: [...people],
            fetching: 'succeded',
        })),
        on(actions.addPersonCreatedSuccess, (state, { person }) => ({
            ...state,
            people: [{ ...person }, ...state.people,],
            fetching: 'succeded',
        })),
        on(actions.loadPersonError, (state, { payload }) => ({
            ...state,
            people: [],
            fetching: 'rejected',
        }))
    ),
});

export const {
    name, // feature name
    reducer, // feature reducer
    selectPeople, // selector for `books` property
    selectFetching, // selector for `loading` property
} = peopleFeature;