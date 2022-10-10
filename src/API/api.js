import axios from 'axios';

const axiosInstance = axios.create({
   baseURL: 'https://rcet.herokuapp.com/'
});

export default axiosInstance;
