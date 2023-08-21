import axios from 'axios';

export const dataApi = axios.create({
  baseURL: process.env.API_URL,
});
