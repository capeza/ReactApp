import { Filter } from '@devexpress/dx-react-grid';

const birthdatePredicate= (value: string, filter: Filter) => {
  const filterDate = new Date(filter.value).toLocaleDateString('ru-RU');
  return value.includes(filterDate);
};

export default birthdatePredicate;
