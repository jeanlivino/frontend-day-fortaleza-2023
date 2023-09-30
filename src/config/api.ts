import axios from 'axios';

export const dataApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
