import axios from "axios";

const baseurl = process.env.REACT_APP_API_URL;

const instance = axios.create({
    baseURL: baseurl,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true
})

export default instance;