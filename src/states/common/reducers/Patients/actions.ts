import {
  ActionTypeMix,
  SET_PATIENTS,
} from './types';
import {IPatientStorage} from "./IState";

export const setPatientsDictionary = (storage: IPatientStorage): ActionTypeMix => ({
  type: SET_PATIENTS,
  value: storage,
});
