import axios from "axios";

const baseurl = 'https://password-reset-be-1-exn2.onrender.com';

const instance = axios.create({
    baseURL: baseurl,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
})

export default instance;