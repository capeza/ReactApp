import { IDictionaryStorage } from '../../interfaces/IDictionaryStorage';
import { IState as IGlobalState } from '../../interfaces/IState';
import Sex from '../../classes/Sex';

export type TDictionaryStorage = IDictionaryStorage<Array<Sex>>;

export interface IState  {
  sex: TDictionaryStorage;
}
