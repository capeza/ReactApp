// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { reducers } from './Reducers';
import dictionariesLoader from '../common/middlewares/dictionaries-loader';
import importStatusChecker from '../common/middlewares/import-status-checker';
import SuccessWorkReconciler from './SuccessWorkReconciler';
import localforage from 'localforage';
import { persistReducer, persistStore } from 'redux-persist';
import thunkMiddleware from 'redux-thunk';

const persistConfig = {
  key: 'TFOMSClient',
  storage: localforage,
  whitelist: ['dictionaries'],
};

const persistedReducer = persistReducer<RootState>(persistConfig, reducers);

export const ProjectStore = configureStore({
  reducer: persistedReducer,
  devTools: process.env.REACT_APP_BUILD_TYPE === 'development',
}, applyMiddleware(thunk));

export type AppDispatch = typeof ProjectStore.dispatch;
export type RootState = ReturnType<typeof ProjectStore.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const persistor = persistStore(ProjectStore);
