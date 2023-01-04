import React, { useState, useEffect } from 'react';
import { TextareaAutosize } from '@mui/material';
import Moment from 'react-moment';
import '../../styles/_dashboard.scss';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as dashboardAction } from "./reducer";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ApplicationState } from "../../store/reducer";
import { TasksState } from "./interface";

export default function DashboardTable() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: ApplicationState) => state.dashboard.isLoading);
  const tasksLog = useSelector((state: ApplicationState) => state.dashboard.tasks);
  const actionType = useSelector((state: ApplicationState) => state.dashboard.actionTypes)
  let index = 0;
  console.log("$DISPATCH TABLE: ", index, tasksLog)
  // const [tasks, setTasks] = useState([tasksLog]);
  // const [tasks, setTasks] = useState([
  //   {
  //     "task_yesterday": 'No Data',
  //     "task_today": 'No Data',
  //     "blocker": 'No Data',
  //     "id": 0
  //   }
  // ]);

  useEffect(() => {
    dispatch(dashboardAction.getTask())
    // if (Object.values([tasksLog]) !== undefined || '') {
      // const { task_yesterday, task_today, blocker, id } = tasksLog
      // setTasks([
      //   {
      //     "task_yesterday": task_yesterday,
      //     "task_today": task_today,
      //     "blocker": blocker,
      //     "id": id
      //   }
      // ])
      console.log("DISPATCH TABLE: ", isLoading)
      console.log("DISPATCH TABLE: ", tasksLog)
      console.log("DISPATCH TABLE: ", actionType)
    // }
    dispatch(dashboardAction.resetAction())
  }, [])

// const handleDelete = (id: any) => {
//   if(window.confirm('Are you sure you want to delete this log?'))
//     dispatch(deleteTaskStart(id));
//     alert("Deleted successfully")
// }

  return (
      <>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">No.</TableCell>
                <TableCell align="right">Task Yesterday</TableCell>
                <TableCell align="right">Task Today</TableCell>
                <TableCell align="right">Blockers</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.keys(tasksLog).map((task: any, index) => {
                return (
                    <TableRow
                        key={index}
                        sx={{'&:last-child td, &:last-child th': {border: 0}}}
                    >
                      <TableCell>{tasksLog[task].id}</TableCell>
                      {/* <TableCell component="th" scope="row">{logItem.date}</TableCell> */}
                      <TableCell align="right">{tasksLog[task].task_yesterday}</TableCell>
                      <TableCell align="right">{tasksLog[task].task_today}</TableCell>
                      <TableCell align="right">{tasksLog[task].blocker}</TableCell>
                    </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </>
  );
}