import axios from 'axios';

export const taskLogApi = async () => {
    await axios.get("http://localhost:500/task")
}