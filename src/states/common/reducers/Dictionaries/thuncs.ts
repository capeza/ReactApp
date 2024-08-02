import { setSexDictionary } from './actions';
import Sex, { ISex } from '../../classes/Sex';
import { Dispatch } from '@reduxjs/toolkit';

export const getSexDictionary = () => {
  return async (dispatch: Dispatch<any>): Promise<void> => {
    const sex: ISex[] = [
      { id: 0, name: 'Женский' },
      { id: 1, name: 'Мужской' },
    ];
    dispatch(
      setSexDictionary({
        dictionary: sex.map((item: ISex) => new Sex(item)),
      })
    );
  };
};
