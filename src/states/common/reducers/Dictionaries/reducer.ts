import { initialState } from './initial';
import {ActionTypeMix,SET_SEX_DIC,} from './types';
import { IState } from './IState';

export const reducer = (state = initialState, action: ActionTypeMix): IState => {
  switch (action.type) {
    case SET_SEX_DIC:
      return { ...state, sex: action.value };
    default:
      return state;
  }
};
