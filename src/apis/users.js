import axios from 'axios';

export const getUsers = () => axios.get('/');
export const addUser = (userData) => axios.post('/', userData);
export const editUser = (id, userData) => axios.put(`/${id}`, userData);
