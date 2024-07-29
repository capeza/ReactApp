import { TableFilterRow } from '@devexpress/dx-react-grid-material-ui';
import {
    Checkbox,
    FormControl,
    Grid,
    InputLabel,
    ListItemText,
    MenuItem,
    Select,
    SelectChangeEvent,
    TableCell,
} from '@mui/material';
import React, { useState } from 'react';
import Patient, { Fields} from '../../../../../states/common/classes/Patient';
import { RootState } from '../../../../../states/store/ProjectStore';
import { useSelector } from 'react-redux';

const SexFilterCell = (props: TableFilterRow.CellProps) => {
    const { onFilter } = props;
    const [sexName, setSexName] = useState<string[]>([]);
    const sexsFromTable: string[] = Array.from(
        new Set<string>(
            useSelector((state: RootState) => state.patients.items).map((p: Patient) => p[Fields.SEX])
        ),
    );

    const handleChange = (event: SelectChangeEvent<typeof sexName>) => {
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
            <Grid sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel>Пол</InputLabel>
                    <Select
                        label="Пол"
                        multiple
                        value={sexName}
                        onChange={handleChange}
                        renderValue={selected => selected.join(', ')}
                    >
                        {sexsFromTable.map(name => (
                            <MenuItem key={name} value={name}>
                                <Checkbox checked={sexName.indexOf(name) > -1} />
                                <ListItemText primary={name} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
        </TableCell>
    );
};

export default SexFilterCell;
