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
import Patient, {
    Fields,
} from '../../../../../states/common/classes/Patient';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../states/store/ProjectStore';

const PensionFilterCell: React.FC<TableFilterRow.CellProps> = props => {
    const { onFilter } = props;
    const [pensionName, setPensionName] = useState<string[]>([]);
    console.log('11');
    const pensionFromTable: string[] = Array.from(
        new Set<string>(
            useSelector((state: RootState) => state.patients.items).map((p: Patient) => p[Fields.PENSION])
        )
    );
    console.log('12', pensionFromTable);

    const handleChange = (event: SelectChangeEvent<typeof pensionName>) => {
        const {
            target: { value },
        } = event;
        const newPensionName = typeof value === 'string' ? value.split(',') : value;

        if (newPensionName.length === 0) {
            onFilter(null);
        } else {
            onFilter({ columnName: Fields.PENSION.toString(), value: newPensionName });
        }
        setPensionName(newPensionName);
    };

    return (
        <TableCell>
            <Grid sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel>Пенсионеры</InputLabel>
                    <Select
                        label="Пенсия"
                        multiple
                        value={pensionName}
                        onChange={handleChange}
                        renderValue={selected => selected.join(', ')}
                    >
                        {pensionFromTable.map(name => (
                            <MenuItem key={name} value={name}>
                                <Checkbox checked={pensionName.indexOf(name) > -1} />
                                <ListItemText primary={name} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
        </TableCell>
    );
};

export default PensionFilterCell;
