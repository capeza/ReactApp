import  React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import {
    GroupingState,
    IntegratedGrouping,
    SelectionState,
    PagingState,
    FilteringState,
    IntegratedPaging,
    IntegratedSelection,
    IntegratedFiltering,
    SortingState,
    IntegratedSorting,
} from '@devexpress/dx-react-grid';
import {
    Grid,
    Table,
    VirtualTable,
    TableHeaderRow,
    TableGroupRow,
    GroupingPanel,
    TableSelection,
    TableFilterRow,
    DragDropProvider,
    Toolbar,
    PagingPanel,
} from '@devexpress/dx-react-grid-material-ui';

import { generateRows } from './demo-data/generator';

export default () => {
    const [columns] = useState([
        { name: 'name', title: 'ФИО' },
        { name: 'gender', title: 'Gender' },
        { name: 'city', title: 'City' },
        { name: 'car', title: 'Car' },
    ]);
    const [rows] = useState(generateRows({ length: 40 }));
    const [selection, setSelection] = useState([]);
    const [grouping, setGrouping] = useState([]);
    const [sorting, setSorting] = useState([]);
    const [pageSizes] = useState([10, 25,50,100, 0]);

    const handleSortingChange = (newSorting) => {
        if (newSorting.length === 0) {
            setSorting([]);
        } else {
            const columnName = newSorting[0].columnName;
            const direction = sorting.find(s => s.columnName === columnName)?.direction;
            if (direction === 'asc') {
                setSorting([{ columnName, direction: 'desc' }]);
            } else if (direction === 'desc') {
                setSorting([]);
            } else {
                setSorting(newSorting);
            }
        }
    };

    return (
        <div>
            <Paper>
                <Grid
                    rows={rows}
                    columns={columns}
                >
                    <DragDropProvider/>
                    <SortingState
                        sorting={sorting}
                        onSortingChange={handleSortingChange}
                    />
                    <GroupingState
                        grouping={grouping}
                        onGroupingChange={setGrouping}
                    />
                    <SelectionState
                        selection={selection}
                        onSelectionChange={setSelection}
                    />
                    <PagingState
                        defaultCurrentPage={0}
                        defaultPageSize={10}
                    />


                    <FilteringState/>


                    <IntegratedPaging/>
                    <IntegratedGrouping/>
                    <IntegratedSelection/>
                    <IntegratedFiltering/>
                    <IntegratedSorting/>
                    {/*<Table/>*/}
                    <VirtualTable/>
                    <TableHeaderRow showSortingControls/>
                    <TableFilterRow/>
                    <TableSelection showSelectAll/>
                    <TableGroupRow/>
                    <Toolbar/>
                    <GroupingPanel/>
                    <PagingPanel
                        pageSizes={pageSizes}
                    />
                </Grid>
            </Paper>

        </div>

    );
};