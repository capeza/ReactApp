import { combineReducers } from '@reduxjs/toolkit';
import { reducer as dictionaries } from '../common/reducers/Dictionaries/reducer';

export const reducers = combineReducers({
  dictionaries: dictionaries,
});

export type RootState = ReturnType<typeof reducers>;
