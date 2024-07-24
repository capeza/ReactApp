import {
  setSexDictionary,
} from './actions';
import Sex, { ISex } from '../../classes/Sex';
import {Dispatch} from "react";

export const getSexDictionary = () => {
  // return (): void => {
  //   const sex = [
  //     { id: 1, name: 'Мужской' },
  //     { id: 2, name: 'Женский' },
  //   ];
  //   setSexDictionary({
  //     dictionary: sex.map((item: ISex) => new Sex(item)),
  //   });
  // };

  return async (dispatch: Dispatch<any>, getState: ISex) =>{
    const sexs: ISex[] = [
      { id: 1, name: 'Мужской' },
      { id: 2, name: 'Женский' },
    ];
    dispatch(setSexDictionary( {
      dictionary: sexs.map(item=>new Sex(item))
    }))
  };
};
