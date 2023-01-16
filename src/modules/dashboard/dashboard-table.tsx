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
import { TasksState, taskLog } from "./interface";
import RemoveIcon from '@mui/icons-material/Remove';
import EditIcon from '@mui/icons-material/Edit';
import UpdateModal from './updateModal';

export default function DashboardTable() {
  const dispatch = useDispatch();
  const tasksLog = useSelector((state: ApplicationState) => state.dashboard.tasks);

  useEffect(() => {
    dispatch(dashboardAction.getTask())
    dispatch(dashboardAction.resetAction())
  }, [])

  const handleDelete = (id: undefined | number) => {
    if(window.confirm('Are you sure you want to delete this log?')) {
      dispatch(dashboardAction.deleteTask(id));
    }
  }

  const [openUpdate, setOpenUpdate] = useState(false);

  const handleSelectedTask = (id: undefined | number) => {
    dispatch(dashboardAction.updateTask(id));
    setOpenUpdate(true);
  }

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
                <TableCell align="right">User Action</TableCell>
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
                    <TableCell align="right">
                      <span>
                        <button 
                          type="button" onClick={()=> handleSelectedTask(tasksLog[task].id)}
                          style={{ border: 'none', backgroundColor: 'white', cursor: 'pointer' }}
                        >
                            <EditIcon />
                        </button>
                        <button 
                          onClick={()=> handleDelete(tasksLog[task].id)}
                          style={{ border: 'none', backgroundColor: 'white', cursor: 'pointer' }}
                        >
                          <RemoveIcon />
                        </button>
                      </span>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <UpdateModal 
          isOpen={openUpdate}
          handleClick={()=> setOpenUpdate(!openUpdate)}
        />
      </>
  );
}