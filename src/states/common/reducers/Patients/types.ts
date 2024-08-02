import { ActionType } from '../../types';
import { IPatientStorage } from './IState';

export type T_SET_PATIENTS = 'SET_PATIENTS';
export const SET_PATIENTS: T_SET_PATIENTS = 'SET_PATIENTS';

export type ActionTypeMix = ActionType<T_SET_PATIENTS, { value: IPatientStorage }>;
