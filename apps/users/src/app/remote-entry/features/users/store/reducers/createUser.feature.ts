import { createFeature, createReducer, on } from '@ngrx/store';
import { TypeFetching } from 'apps/users/src/app/core/interfaces/IFetching';
import { IUser } from '../../interfaces/IUser';

import * as actions from '../actions/create-user.actions';

interface State {
  user: IUser;
  fetching: TypeFetching;
  errorMessage:string;
}

const initialState: State = {
  user: { user: '', id: '' },
  fetching: 'iddle',
  errorMessage: ''
};

export const createUserFeature = createFeature({
  name: 'createUserFeature',
  reducer: createReducer(
    initialState,
    on(actions.loadCreateUsers, (state) => ({
      ...state,
      fetching: 'pending',
      errorMessage:''
    })),
    on(actions.loadCreateUsersSuccess, (state, { user }) => ({
      ...state,
      user: { user: user.user, id: user.id },
      fetching: 'succeded',
    })),
    on(actions.loadCreateUsersError, (state, { payload }) => {
      console.log(payload);
      
      return ({
      ...state,
      user: { user: '', id: '' },
      fetching: 'rejected',
      errorMessage:payload?.error?.detail
    })})
  ),
});

export const {
  name, // feature name
  reducer, // feature reducer
  selectUser, // selector for `user` property
  selectFetching, // selector for `loading` property
  selectErrorMessage,
} = createUserFeature;