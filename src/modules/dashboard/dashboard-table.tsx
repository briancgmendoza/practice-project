import { TextareaAutosize } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Moment from 'react-moment';
import '../../styles/_dashboard.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getTasksStart, deleteTaskStart } from './reducer';
import { taskLogState } from './interface';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function DashboardTable(props: any) {
  
const dispatch = useDispatch();
const tasksLog = useSelector((state: taskLogState) => state.taskLog);

useEffect(() => {
  dispatch(getTasksStart());
}, []);

const handleDelete = (id: any) => {
  if(window.confirm('Are you sure you want to delete this log?'))
    dispatch(deleteTaskStart(id));
    alert("Deleted successfully")
}
console.log(tasksLog);
  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Task Yesterday</TableCell>
            <TableCell align="right">Task Today</TableCell>
            <TableCell align="right">Blockers</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {Object.keys(tasksLog).map((logItem: any, index: number) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
              <TableCell>{index+1}</TableCell>
              {/* <TableCell component="th" scope="row">
                {logItem.date}
              </TableCell> */}
              <TableCell align="right">{logItem.task_yesterday}</TableCell>
              <TableCell align="right">{logItem.task_today}</TableCell>
              <TableCell align="right">{logItem.blockers}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}