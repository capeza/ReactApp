import Patient, { IPatient } from '../../classes/Patient';
import { Dispatch } from 'react';
import { setPatientsStorage } from './actions';

export const getPatientsStorage = () => {
  return async (dispatch: Dispatch<any>) => {
    const patients: IPatient[] = [
      {
        firstName: 'Сергей',
        lastName: 'Оспанов',
        middleName: 'Эдуардович',
        birthday: new Date(2003, 7, 24).getTime(),
        sex: 1,
      },
      {
        firstName: 'Анна',
        lastName: 'Иванова',
        middleName: 'Сергеевна',
        birthday: new Date(1950, 5, 22).getTime(),
        sex: 0,
      },
      {
        firstName: 'Дмитрий',
        lastName: 'Смирнов',
        middleName: 'Алексеевич',
        birthday: new Date(1960, 2, 14).getTime(),
        sex: 1,
      },
      {
        firstName: 'Владислав',
        lastName: 'Богушов',
        middleName: 'Юрьевич',
        birthday: new Date(1945, 10, 11).getTime(),
        sex: 1,
      },
      {
        firstName: 'Елена',
        lastName: 'Кузнецова',
        middleName: 'Владимировна',
        birthday: new Date(1989, 7, 5).getTime(),
        sex: 0,
      },
      {
        firstName: 'Александр',
        lastName: 'Попов',
        middleName: 'Иванович',
        birthday: new Date(1990, 11, 30).getTime(),
        sex: 1,
      },
      {
        firstName: 'Мария',
        lastName: 'Соколова',
        middleName: 'Андреевна',
        birthday: new Date(2001, 1, 17).getTime(),
        sex: 0,
      },
      {
        firstName: 'Иван',
        lastName: 'Лебедев',
        middleName: 'Петрович',
        birthday: new Date(1988, 3, 12).getTime(),
        sex: 1,
      },
      {
        firstName: 'Ольга',
        lastName: 'Козлова',
        middleName: 'Николаевна',
        birthday: new Date(1992, 8, 9).getTime(),
        sex: 0,
      },
      {
        firstName: 'Сергей',
        lastName: 'Новиков',
        middleName: 'Александрович',
        birthday: new Date(1996, 4, 21).getTime(),
        sex: 1,
      },
      {
        firstName: 'Юлия',
        lastName: 'Морозова',
        middleName: 'Михайловна',
        birthday: new Date(1997, 6, 3).getTime(),
        sex: 0,
      },
      {
        firstName: 'Николай',
        lastName: 'Петров',
        middleName: 'Дмитриевич',
        birthday: new Date(2000, 9, 25).getTime(),
        sex: 1,
      },
      {
        firstName: 'Татьяна',
        lastName: 'Волкова',
        middleName: 'Олеговна',
        birthday: new Date(1964, 0, 29).getTime(),
        sex: 0,
      },
      {
        firstName: 'Андрей',
        lastName: 'Зайцев',
        middleName: 'Сергеевич',
        birthday: new Date(1993, 2, 18).getTime(),
        sex: 1,
      },
      {
        firstName: 'Екатерина',
        lastName: 'Соловьева',
        middleName: 'Юрьевна',
        birthday: new Date(1985, 10, 15).getTime(),
        sex: 0,
      },
      {
        firstName: 'Максим',
        lastName: 'Васильев',
        middleName: 'Игоревич',
        birthday: new Date(1955, 5, 11).getTime(),
        sex: 1,
      },
      {
        firstName: 'Наталья',
        lastName: 'Павлова',
        middleName: 'Викторовна',
        birthday: new Date(1960, 6, 22).getTime(),
        sex: 0,
      },
      {
        firstName: 'Георгий',
        lastName: 'Степанов',
        middleName: 'Романович',
        birthday: new Date(1994, 11, 6).getTime(),
        sex: 1,
      },
      {
        firstName: 'Виктория',
        lastName: 'Орлова',
        middleName: 'Анатольевна',
        birthday: new Date(1999, 1, 13).getTime(),
        sex: 0,
      },
      {
        firstName: 'Евгений',
        lastName: 'Федоров',
        middleName: 'Борисович',
        birthday: new Date(2003, 3, 7).getTime(),
        sex: 1,
      },
      {
        firstName: 'Ксения',
        lastName: 'Михайлова',
        middleName: 'Григорьевна',
        birthday: new Date(1990, 6, 1).getTime(),
        sex: 0,
      },
    ];
    dispatch(setPatientsStorage(patients.map(item => new Patient(item))));
  };
};
