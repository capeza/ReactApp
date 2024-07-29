import { Filter } from '@devexpress/dx-react-grid';

const stringPredicate = (value: string, filter: Filter): boolean => {
    return filter.value.find((data: string) => data.toLocaleLowerCase() === value.toLocaleLowerCase())
        ? true
        : false;
};

export default stringPredicate;