import Patient from '../../classes/Patient';

export type IPatientStorage = Array<Patient>;

export interface IState {
  items: IPatientStorage;
}
