import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// material ui
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';

// project imports
import MainCard from 'components/Base/MainCard';
import SkeletonPayAddress from 'components/Cards/Skeleton/PayAddress';

// actions
import { fetchDutyForCleaning } from 'redux/dashboard/dashboardSlice';

// import table data
import tableData from 'database/table-data';

// utils
import { isEmpty } from 'utils/isEmpty';

function CleaningCorridor({ isLoading }) {
  const dispatch = useDispatch();

  const tableHeadData = tableData.dutyForCleaning.head;
  const tableBodyData = useSelector((state) => state.dashboard.dutyForCleaning);

  useEffect(() => {
    dispatch(fetchDutyForCleaning());
  }, []);

  return (
    <>
      {isLoading ? (
        <SkeletonPayAddress />
      ) : (
        <MainCard title="Cleaning 2nd-floor corridor (2022-05-30 ~ 2022-06-04)">
          <Table>
            <TableHead>
              <TableRow>
                {isEmpty(tableHeadData) ? (
                  <></>
                ) : (
                  tableHeadData.map((item, index) => (
                    <TableCell key={index}>{item}</TableCell>
                  ))
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {isEmpty(tableBodyData) ? (
                <></>
              ) : (
                tableBodyData.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.day}</TableCell>
                    <TableCell>{item.date}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.time}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </MainCard>
      )}
    </>
  );
}

export default CleaningCorridor;
