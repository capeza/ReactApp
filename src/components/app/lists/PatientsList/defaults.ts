import { Fields } from '../../../../states/common/classes/Patient';
import birthdatePredicate from "./predicates/birthdatePredicate";
import stringPredicate from "./predicates/stringPredicate";

export const defaultListExtensions = {
  columns: [
    Fields.FULL_NAME,
    Fields.BIRTH_DATE,
    Fields.SEX,
    Fields.PENSION,
  ],
  disableGroupColumn: [
    {
      columnName: Fields.FULL_NAME.toString(),
      groupingEnabled: false,
    },
  ],

  integratedFilteringColumnExtensions: [
    {
      columnName: Fields.BIRTH_DATE.toString(),
      predicate: birthdatePredicate,
    },
    {
      columnName: Fields.PENSION.toString(),
      predicate: stringPredicate,
    },
    {
      columnName: Fields.SEX.toString(),
      predicate: stringPredicate,
    },
  ],


  tableMessages: {
    noData: 'Нет данных',
    groupByColumn: 'Перетащите заголовок столбца сюда, чтобы сгруппировать по этому столбцу',
    filterPlaceholder: 'Фильтр',
    sortingHint: 'Сортировка',
  },
};
