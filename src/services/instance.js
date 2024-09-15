import axios from "axios";

const baseurl = 'http://localhost:3001';

const instance = axios.create({
    baseURL: baseurl,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
})

export default instance;