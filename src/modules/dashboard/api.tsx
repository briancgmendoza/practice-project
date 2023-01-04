import axios from 'axios';

export const getAllDataRequest = () => {
    return axios.get("http://localhost:5000/tasks")
};

export const createTaskLogApi = (tasks: any) => {
    return axios.post("http://localhost:5000/tasks", tasks)
}