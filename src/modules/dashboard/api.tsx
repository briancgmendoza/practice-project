import axios from 'axios';

export const tasksLogApi = async () => {
    await axios.get("http://localhost:5000/tasks")
};

export const taskLogApi = async (tasks: any) => {
    await axios.post("http://localhost:5000/tasks", tasks)
};