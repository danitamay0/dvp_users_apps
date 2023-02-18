import { createFeature, createReducer, on } from '@ngrx/store';
import { TypeFetching } from 'apps/users/src/app/core/interfaces/IFetching';
import { IRequestGithub , Item} from '../../interfaces/gitHubUsers';

import * as actions from '../actions/search-user.actions';

interface State {
  users: Item[];
  fetching: TypeFetching;
  errorMessage:string;
}

const initialState: State = {
  users:[],
  fetching: 'iddle',
  errorMessage: ''
};

export const searchUserFeature = createFeature({
  name: 'searchUserFeature',
  reducer: createReducer(
    initialState,
    on(actions.loadSearchUsers, (state) => ({
      ...state,
      fetching: 'pending',
      errorMessage:''
    })),
    on(actions.loadSearchUsersSuccess, (state, { users }) => ({
      ...state,
      users: [...users],
      fetching: 'succeded',
    })),
    on(actions.loadSearchUsersError, (state, { payload }) =>  ({
      ...state,
      user: { user: '', id: '' },
      fetching: 'rejected',
      errorMessage:payload?.error?.detail
    }))
  ),
});

export const {
  name, // feature name
  reducer, // feature reducer
  selectUsers, // selector for `user` property
  selectFetching, // selector for `loading` property
  selectErrorMessage,
} = searchUserFeature;