import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: 'https://radflix-cms.herokuapp.com/api',
});

export default instance;
