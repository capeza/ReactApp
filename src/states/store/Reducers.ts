import { combineReducers } from '@reduxjs/toolkit';
import { reducer as dictionaries } from '../common/reducers/Dictionaries/reducer';
import { reducer as patients } from '../common/reducers/Patients/reducer';

export const reducers = combineReducers({
  dictionaries: dictionaries,
  patients: patients,
});

export type RootState = ReturnType<typeof reducers>;
