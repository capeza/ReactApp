import { ActionTypeMix, SET_SEX_DIC } from './types';
import { IDictionaryStorage } from '../../interfaces/IDictionaryStorage';
import Sex from '../../classes/Sex';

export const setSexDictionary = (storage: IDictionaryStorage<Array<Sex>>): ActionTypeMix => ({
  type: SET_SEX_DIC,
  value: storage,
});
