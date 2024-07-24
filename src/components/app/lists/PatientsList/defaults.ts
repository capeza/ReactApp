import { Fields } from '../../../../states/common/classes/Patient';

export const defaultListExtensions = {
  columns: [
    Fields.FULL_NAME,
    Fields.BIRTH_DATE,
    Fields.SEX,
    Fields.PENSION,
  ],
  columnExtensions: [
    {
      columnName: Fields.PATIENT.toString(),
      width: 362,
    },
    {
      columnName: Fields.ADDRESS.toString(),
      wordWrapEnabled: true,
    },
    {
      columnName: Fields.COVID.toString(),
      width: 156,
    },
    {
      columnName: Fields.INFORMING.toString(),
      width: 166,
    },
    {
      columnName: Fields.MEDICAL_ORGANIZATION_ATTACHMENT.toString(),
      width: 186,
    },
    {
      columnName: Fields.PLAN_BY_PLACE.toString(),
      width: 168,
      wordWrapEnabled: true,
    },
    {
      columnName: Fields.PRIORITY_GROUP.toString(),
      align: 'center',
      wordWrapEnabled: true,
      width: 100,
    },
    {
      columnName: Fields.HEALTH_GROUP.toString(),
      wordWrapEnabled: true,
      align: 'center',
      width: 106,
    },
  ],
  tableMessages: {
    noData: 'Нет данных',
    groupByColumn: 'Перетащите заголовок столбца сюда, чтобы сгруппировать по этому столбцу',
    filterPlaceholder: 'Фильровать...',
    sortingHint: 'Сортировать',
  },
};
