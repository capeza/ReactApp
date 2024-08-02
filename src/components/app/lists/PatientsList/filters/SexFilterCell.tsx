import { TableFilterRow } from '@devexpress/dx-react-grid-material-ui';
import {
  Checkbox,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
  TableCell,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import Patient, { Fields } from '../../../../../states/common/classes/Patient';
import { RootState } from '../../../../../states/store/ProjectStore';
import { useSelector } from 'react-redux';

const SexFilterCell = (props: TableFilterRow.CellProps) => {
  const { onFilter } = props;
  const [sexName, setSexName] = useState<string[]>([]);
  // TODO sexsFromTable лучше просто values, все остальные фильтры аналогично.
  //  Набивать values лучше в useEffect, где в deps будет массив пациентов:
  //  изменяется список пациентов - изменяется набивка
  const [values, setValues] = useState<string[]>([]);
  // const sexsFromTable: string[] = Array.from(
  //   new Set<string>(
  //     useSelector((state: RootState) => state.patients.items).map((p: Patient) => p[Fields.SEX])
  //   )
  // );
  const patients = useSelector((state: RootState) => state.patients.items);

  useEffect(() => {
    setValues(Array.from(new Set<string>(patients.map((p: Patient) => p[Fields.SEX]))));
  }, [patients]);

  const handleChange = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = event;
    const newSexName = typeof value === 'string' ? value.split(',') : value;

    if (newSexName.length === 0) {
      onFilter(null);
    } else {
      onFilter({ columnName: Fields.SEX.toString(), value: newSexName });
    }
    setSexName(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <TableCell>
      <InputLabel>Пол</InputLabel>
      <Select
        fullWidth
        sx={{ minWidth: 120 }}
        label="Пол"
        multiple
        value={sexName}
        onChange={handleChange}
        renderValue={selected => selected.join(', ')}
      >
        {values.map(name => (
          <MenuItem key={name} value={name}>
            <Checkbox checked={sexName.indexOf(name) > -1} />
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </Select>
    </TableCell>
  );
};

export default SexFilterCell;
