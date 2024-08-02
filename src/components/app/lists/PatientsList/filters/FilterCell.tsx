import { TableFilterRow } from '@devexpress/dx-react-grid-material-ui';
import BirthdayFilterCell from './BirthDateFilterCell';
import SexFilterCell from './SexFilterCell';
import PensionFilterCell from './PensionFilterCell';
import { Fields } from '../../../../../states/common/classes/Patient';
import React from 'react';

export const FilterCell = (props: TableFilterRow.CellProps) => {
  const { column } = props;

  switch (column.name) {
    case Fields.BIRTH_DATE.toString():
      return <BirthdayFilterCell {...props} />;
    case Fields.SEX.toString():
      return <SexFilterCell {...props} />;
    case Fields.PENSION.toString():
      return <PensionFilterCell {...props} />;
    default:
      return <TableFilterRow.Cell {...props} />;
  }
};

export default FilterCell;
