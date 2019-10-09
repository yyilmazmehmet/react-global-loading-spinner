import axios from 'axios';

const http = axios.create();
http.interceptors.request.use(config => {

    document.body.classList.add('loading-indicator');
    return config;

}, error => {
    document.body.classList.remove('loading-indicator');
    return Promise.reject(error);
});

http.interceptors.response.use(response => {
    document.body.classList.remove('loading-indicator');
    return response;
}, error => {
    document.body.classList.remove('loading-indicator');
    return Promise.reject(error);
});

export default http;