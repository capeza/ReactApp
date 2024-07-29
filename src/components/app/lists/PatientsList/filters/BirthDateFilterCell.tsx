import React from 'react';
import { TableFilterRow } from '@devexpress/dx-react-grid-material-ui';
import {TableCell, TextField} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment from 'moment';
import 'moment/locale/ru';
import { Fields } from '../../../../../states/common/classes/Patient';

const BirthdayFilterCell = (props: TableFilterRow.CellProps) => {
    const { onFilter } = props;

    const handleDateChange = (date: moment.Moment | null) => {
        if (date && date.isValid()) {
            onFilter({ columnName: Fields.BIRTH_DATE.toString(), value: date.valueOf() });
        } else {
            onFilter(null);
        }
    };

    return (
        <TableCell>
            <LocalizationProvider
                dateAdapter={AdapterMoment}
                adapterLocale="ru"
            >
                <DatePicker
                    onChange={handleDateChange}
                    format="ДД.ММ.ГГГГ"
                />
            </LocalizationProvider>
        </TableCell>
    );
};

export default BirthdayFilterCell;
