import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as dashboardAction } from "./reducer";
import { ApplicationState } from "../../store/reducer";
// import { getTasksStart, createTaskStart } from './reducer';
import { TasksState } from './interface';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';

const initialState =
  {
    task_yesterday: "",
    task_today: "",
    blocker: "",
  }

const AddTaskLog = () => {

  const [taskLogValue, setTaskLogValue] = useState(initialState);
  const taskLog = useSelector((state: ApplicationState) => state.dashboard.tasks)
  const dispatch = useDispatch();

  // console.log('taskLog: ', taskLogValue);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if(taskLogValue.task_yesterday && taskLogValue.task_today || taskLogValue.blocker) {
        dispatch(dashboardAction.createTask(taskLogValue));
      // setTimeout(() => navigate('/'), 500);
    }
  }

  const handleInputChange = (e: any) => {
    e.preventDefault();
    setTaskLogValue({
      ...taskLogValue,
      [e.target.name]: e.target.value
    });
  }

  const [openAddWindow, setOpenAddWindow] = useState(false);

  return (
    <div style={{ padding: '10px' }}>
      { openAddWindow ? 
      <form className="" onSubmit={handleSubmit}>
        <legend>Add tasks Log</legend>
        <div className="field">
            <label className="label">Completed Task Yesterday</label>
            <div className="control">
              <input
                  className="input"
                  type="text"
                  placeholder="What you did yesterday?"
                  defaultValue={taskLogValue.task_yesterday}
                  onChange={handleInputChange}
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
                  defaultValue={taskLogValue.task_today}
                  onChange={handleInputChange}
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
                  defaultValue={taskLogValue.blocker}
                  onChange={handleInputChange}
                  name='blocker'
              />
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button type="submit" className="button is-link">Add</button>
            </div>
            <div className="control">
              <button type="button" className="button is-link is-light" onClick={()=>setOpenAddWindow(!openAddWindow)}>Cancel</button>
            </div>
          </div>
        </form>
        : <button type="button" className="button is-link" onClick={()=>setOpenAddWindow(!openAddWindow)} >Add task log</button>
        }
    </div>
  ) 
}

export default AddTaskLog