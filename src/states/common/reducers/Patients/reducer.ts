import { initialState } from './initial';
import { ActionTypeMix, SET_PATIENTS } from './types';
import { IState } from './IState';

export const reducer = (state = initialState, action: ActionTypeMix): IState => {
  switch (action.type) {
    case SET_PATIENTS:
      return { ...state, items: action.value };
    default:
      return state;
  }
};
