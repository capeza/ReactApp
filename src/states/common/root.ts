import { combineReducers } from '@reduxjs/toolkit';
import { reducer as dictionariesReducer } from './reducers/Dictionaries/reducer';

export const rootReducer = combineReducers({
  dictionaries: dictionariesReducer,
});

export type IStoreType = ReturnType<typeof rootReducer>;
