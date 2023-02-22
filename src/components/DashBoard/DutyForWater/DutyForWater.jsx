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
import { fetchDutyForWater } from 'redux/dashboard/dashboardSlice';

// import table data
import tableData from 'database/table-data';

// utils
import { isEmpty } from 'utils/isEmpty';

function DutyForWater({ isLoading }) {
  const dispatch = useDispatch();

  const tableHeadData = tableData.dutyForWater.head;
  const tableBodyData = useSelector((state) => state.dashboard.dutyForWater);

  useEffect(() => {
    // console.log(123);
    dispatch(fetchDutyForWater());
  }, []);

  return (
    <>
      {isLoading ? (
        <SkeletonPayAddress />
      ) : (
        <MainCard title="Duty for Water">
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
                    <TableCell>{item.date}</TableCell>
                    <TableCell>{item.name}</TableCell>
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

export default DutyForWater;
