import axios from 'axios';

export const getAllDataRequest = () => {
    return axios.get("http://localhost:5000/tasks")
};