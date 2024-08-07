import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import {
  GroupingState,
  IntegratedGrouping,
  PagingState,
  FilteringState,
  IntegratedPaging,
  IntegratedFiltering,
  SortingState,
  IntegratedSorting,
  Sorting,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  VirtualTable,
  TableHeaderRow,
  TableGroupRow,
  GroupingPanel,
  TableFilterRow,
  DragDropProvider,
  Toolbar,
  PagingPanel,
} from '@devexpress/dx-react-grid-material-ui';
import { handleSortingChange } from './sorting/SortingUtils';
import Patient, { Fields } from '../../../../states/common/classes/Patient';
import { defaultListExtensions } from './defaults';
import { RootState } from '../../../../states/store/ProjectStore';
import { useSelector } from 'react-redux';
import PatientFieldProvider from './providers/PatientFieldProvider';
import FilterCell from './filters/FilterCell';

const MyTableComponent = () => {
  const patients: Patient[] = useSelector((state: RootState) => state.patients.items);
  const patientColumns: Fields[] = defaultListExtensions.columns;
  const [columns] = useState(
    patientColumns.map(item => ({
      name: item.toString(),
      title: Patient.columnTitleCallBack(item), ///???
    }))
  );
  const [sorting, setSorting] = useState<Sorting[]>([]);
  const [pageSizes] = useState<number[]>([10, 25, 50, 100, 0]);
  const onSortingChange = (newSorting: Sorting[]) => {
    handleSortingChange(newSorting, sorting, setSorting);
  };

  return (
    <Paper>
      <Grid rows={patients} columns={columns}>
        <DragDropProvider />
        <SortingState sorting={sorting} onSortingChange={onSortingChange} />
        <GroupingState columnExtensions={defaultListExtensions.disableGroupColumn} />
        <PagingState defaultCurrentPage={0} defaultPageSize={25} />
        <PatientFieldProvider for={[Fields.PENSION.toString()]} />
        <FilteringState />
        <IntegratedGrouping />
        <IntegratedFiltering
          columnExtensions={defaultListExtensions.integratedFilteringColumnExtensions}
        />
        <IntegratedSorting />
        <IntegratedPaging />
        <VirtualTable messages={defaultListExtensions.tableMessages} />
        <TableGroupRow />
        <Toolbar />
        <GroupingPanel showGroupingControls messages={defaultListExtensions.tableMessages} />
        <TableFilterRow cellComponent={FilterCell} messages={defaultListExtensions.tableMessages} />
        <TableHeaderRow showSortingControls messages={defaultListExtensions.tableMessages} />
        <PagingPanel pageSizes={pageSizes} />
      </Grid>
    </Paper>
  );
};

export default MyTableComponent;
