import axios from "axios";

/* Axios Instance */

const config = {
  baseURL: ""
}
const api = axios.create(config);

/* Axios Interceptors */

api.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    // ex: config token
    // config.headers.authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);