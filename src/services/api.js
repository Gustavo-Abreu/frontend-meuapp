import axios from 'axios';

const api = axios.create({
    baseURL: 'https://gustavo-backend.herokuapp.com'
});

export default api;

