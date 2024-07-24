import React from 'react';
import { DataTypeProvider, DataTypeProviderProps } from '@devexpress/dx-react-grid';

import {Typography} from "@mui/material";
import SecondStageIcon from "../../../../uikit/icons/SecondStageIcon";
import {PENSION_STATUS} from "../../../../../states/common/classes/Patient";

const PatientFieldFormatter: React.FC<DataTypeProvider.ValueFormatterProps> = props => {
  const { row, value } = props;

    return row ? value === PENSION_STATUS.PENSIONER ? <SecondStageIcon /> : <Typography /> : value
};

const PatientFieldProvider: React.ComponentType<DataTypeProviderProps> = props => (
  <DataTypeProvider formatterComponent={PatientFieldFormatter} {...props} />
);

export default PatientFieldProvider;
