import { IDictionaryStorage } from '../../interfaces/IDictionaryStorage';
import { ActionType } from '../../types';
import Sex from '../../classes/Sex';

export type T_SET_SEX_DIC = 'DIC/SET_SEX_DIC';
export const SET_SEX_DIC: T_SET_SEX_DIC = 'DIC/SET_SEX_DIC';

export type ActionTypeMix = ActionType<T_SET_SEX_DIC, { value: IDictionaryStorage<Array<Sex>> } >;
