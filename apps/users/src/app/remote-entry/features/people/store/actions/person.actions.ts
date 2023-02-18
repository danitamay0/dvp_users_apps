import { createAction, props } from '@ngrx/store';
import { IPerson } from '../../interfaces/IPerson';

export const loadPeople = createAction(
    '[Users Page] LoadPeople',
);

export const loadPersonSuccess = createAction(
    '[Person Page] LoadPeople Success',
    props<{ people: IPerson[] }>()
);

export const addPersonCreatedSuccess = createAction(
    '[Person Page] AddPersonCreated Success',
    props<{ person: IPerson}>()
);
export const loadPersonError = createAction(
    '[Person Page] LoadPerson Error',
    props<{ payload: any }>()
);