import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTaskStart } from './reducer';
import { taskLogState } from './interface';
import Button from '@mui/material/Button';

const AddTaskLog = () => {
  const dispatch = useDispatch();
  const {taskLog} = useSelector((state: taskLogState) => state.taskLog);

  useEffect(() => {
    dispatch(getTaskStart());
  }, []);

  return (
    <div>
      <form className="form">
            <label>
                <textarea placeholder="What you did yesterday?"/>
            </label>
            <label>
                <textarea placeholder="What is your plan today?"/>
            </label>
            <label>
                <textarea placeholder="Blockers"/>
            </label>
            <Button className="submitBtn" variant="outlined">save</Button>
        </form>
    </div>
  )
}

export default AddTaskLog