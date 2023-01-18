import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import { taskLog } from "./interface";
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as dashboardAction } from "./reducer";
import { ApplicationState } from '../../store/reducer';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function UpdateModal(props: any) {

  const [taskLog, setTaskLog] = useState({
    task_yesterday: '',
    task_today: '',
    blocker: ''
  });
  const tasksLogUpdate = useSelector((state: ApplicationState) => state.dashboard.tasksUpdate);
  const dispatch = useDispatch();

  useEffect(()=> {
    setTaskLog(tasksLogUpdate);
    dispatch(dashboardAction.updateTask(props.id));
  }, [tasksLogUpdate])

  const handleUpdate = (e: any) => {
    e.preventDefault();
    if(taskLog !== undefined || null) {
        dispatch(dashboardAction.selectedTask(taskLog));
        console.log("updated")
        props.handleClick()
    }
    console.log("Did not update")
  }

  const handleInputUpdate = (e: any) => {
    e.preventDefault();
    setTaskLog({
      ...taskLog,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div>
      <Modal
        open={props.isOpen}
        onClose={props.handleClick}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{textAlign: 'center', padding: 15}}>
            Task Log Detail
          </Typography>
      <form className="" onSubmit={handleUpdate}>
        <div className="field">
            <label className="label">Completed Task Yesterday</label>
            <div className="control">
              <input
                  className="input"
                  type="text"
                  placeholder="What you did yesterday?"
                  defaultValue={tasksLogUpdate.task_yesterday || ""}
                  onChange={handleInputUpdate}
                  name='task_yesterday'
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Your Task Today</label>
            <div className="control">
              <input
                  className="input"
                  type="text"
                  placeholder="What is your plan today?"
                  defaultValue={tasksLogUpdate.task_today || ""}
                  onChange={handleInputUpdate}
                  name='task_today'
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Blockers</label>
            <div className="control">
              <input
                  className="input"
                  type="text"
                  placeholder="Blockers"
                  defaultValue={tasksLogUpdate.blocker || ""}
                  onChange={handleInputUpdate}
                  name='blocker'
              />
            </div>
          </div>

          <Stack direction="row" spacing={10}>
            <Button type="button" onClick={props.handleClick} variant="outlined">
              Cancel
            </Button>
            <Button type="submit" variant="contained">
              Update
            </Button>
          </Stack>
        </form>
        </Box>
      </Modal>
    </div>
  );
}