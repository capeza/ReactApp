import Sex from "./Sex";
import {ProjectStore} from "../../store/ProjectStore";


export enum Fields {
    FULL_NAME,
    BIRTH_DATE  ,
    SEX ,
    PENSION,
}

export const PENSION_STATUS = {
    PENSIONER: 'Пенсионер',
};

export interface IPatient {
    firstName: string;
    lastName: string;
    middleName: string|undefined;
    birthday: number;
    sex: number;
}

export default class Patient{
    firstName: string;
    lastName: string;
    middleName: string|undefined;
    birthday: number;
    sex: number;
    constructor(item: IPatient){
        this.firstName = item.firstName;
        this.lastName = item.lastName;
        this.middleName = item.middleName;
        this.birthday = item.birthday;
        this.sex=item.sex;
    }

    get [Fields.FULL_NAME](): string {
    return (
        (this.lastName ? this.lastName : ' ')+
        (this.firstName ? this.firstName : ' ')+
        (this.middleName ? this.middleName : ' ')
    )
    }

    get [Fields.BIRTH_DATE](): string {
        const age = this.getPatientAge();
        const birth_date = new Date(this.birthday);
        if (age < 0){
            return 'Ошибка пациент еще не рожден';
        }
        return (birth_date.toLocaleDateString('ru-Ru')+'('+age+')');
        // return `${birth_date.toLocaleDateString('ru-RU')}(${age})`;
    }

    get [Fields.SEX](): string {
        const state = ProjectStore.getState();
        const sexs: Sex[] = state.dictionaries.sex.dictionary;
        const foundSex: Sex | undefined = sexs.find((element: Sex) => this.sex === element.id);
        return foundSex ? foundSex.name : 'No data';
    }

    get [Fields.PENSION](): string {
        switch (this[Fields.SEX].toLocaleLowerCase()) {
            case 'мужской':
                return this.getPatientAge()>=65? 'Пенсионер': 'Рано еще на пенсию выходить';
            case 'женский':
                return this.getPatientAge()>=60? 'Пенсионер': 'Рано еще на пенсию выходить';
            default:
                return 'Информация отсутствует';
        }
    }



    getPatientAge(): number{
        const ageDifference = new Date(Date.now() - this.birthday - 1970)
        return ageDifference.getFullYear();
    }




    static columnTitleCallBack = (field: Fields): string => {
        switch (field) {
            case Fields.FULL_NAME:
                return 'ФИО';
            case Fields.BIRTH_DATE:
                return 'Дата рождения';
            case Fields.SEX:
                return 'Пол';
            case Fields.PENSION:
                return 'Достиг пенсионного возроста?';
        }
    };
}




