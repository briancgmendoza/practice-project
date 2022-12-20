import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTasksStart, createTaskStart } from './reducer';
import { taskLogState } from './interface';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';

const initialState = {
  task_yesterday: "",
  task_today: "",
  blockers: ""
}

const AddTaskLog = () => {

  const [taskLogValue, setTaskLogValue] = useState(initialState);
  const { tasksLog } = useSelector((state : any) => state.taskLog)
  const { task_yesterday, task_today, blockers } = taskLogValue;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if(task_yesterday && task_today || blockers) {
      dispatch(createTaskStart(taskLogValue))
      setTimeout(() => navigate('/'), 500);
    }
  }

  const handleInputChange = (e: any) => {
    e.preventDefault();
    setTaskLogValue({ ...taskLogValue, [task_yesterday]: e.target.value});
  }

  const [openAddWindow, setOpenAddWindow] = useState(false);

  return (
    <div>
      { openAddWindow ? 
      <form className="" onSubmit={handleSubmit}>
        <legend>Add tasks Log</legend>
        <div className="field">
            <label className="label">Completed Task Yesterday</label>
            <div className="control">
              <input className="input" type="text" placeholder="What you did yesterday?" value={task_yesterday} onChange={handleInputChange} />
            </div>
          </div>

          <div className="field">
            <label className="label">Your Task Today</label>
            <div className="control">
              <input className="input" type="text" placeholder="What is your plan today?" value={task_today} onChange={handleInputChange} />
            </div>
          </div>

          <div className="field">
            <label className="label">Blockeres</label>
            <div className="control">
              <input className="input" type="text" placeholder="Blockers" value={task_yesterday} onChange={handleInputChange} />
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button type="submit"className="button is-link">Add</button>
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