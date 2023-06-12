import axios from 'axios';

const API_URL_ENV = import.meta.env.VITE_APP_API_URL;
const API_TOKEN_ENV = import.meta.env.VITE_APP_API_TOKEN;

export const makeRequest = axios.create({
    baseURL: API_URL_ENV,
    headers:{
        Authorization: "bearer " + API_TOKEN_ENV
    },
});