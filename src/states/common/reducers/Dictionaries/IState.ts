import { IDictionaryStorage } from '../../interfaces/IDictionaryStorage';
import Sex from '../../classes/Sex';

export type TDictionaryStorage = IDictionaryStorage<Array<Sex>>;

export interface IState {
  sex: TDictionaryStorage;
}
