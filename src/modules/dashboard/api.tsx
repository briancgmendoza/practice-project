import axios from 'axios';

export const tasksLogApi = async () => {
    await axios.get("http://localhost:5000/tasks")
};

export const createTaskLogApi = async (tasks: any) => {
    await axios.post("http://localhost:5000/tasks", tasks)
};

export const deleteTaskLogApi = async (taskId: any) => {
    await axios.post(`http://localhost:5000/tasks/${taskId}`)
};