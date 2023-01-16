import axios from 'axios';
import { taskLog } from "./interface";

export const getAllDataRequest = () => {
    return axios.get("http://localhost:5000/tasks")
};

export const createTaskLogApi = (task: taskLog) => {
    return axios.post("http://localhost:5000/tasks", task)
}

export const updateTaskLogApi = (id: undefined | number) => {
    return axios.get(`http://localhost:5000/tasks/${id}`)
}

export const selectedTaskLogApi = (task: taskLog) => {
    return axios.put(`http://localhost:5000/tasks/${task.id}`, task)
}

export const deleteTaskLogApi = (id: number) => {
    return axios.delete(`http://localhost:5000/tasks/${id}`)
}