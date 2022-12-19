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
  const { taskLog } = useSelector((state : any) => state.dashboard)
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
    let { task_yesterday, value } = e.target;
    setTaskLogValue({ ...taskLogValue, [task_yesterday]: value});
  }

  return (
    <div>
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
              <button className="button is-link">Add</button>
            </div>
            <div className="control">
              <button className="button is-link is-light" ><Link to="/dashboard">Go Back</Link></button>
            </div>
          </div>
        </form>
    </div>
  )
}

export default AddTaskLog