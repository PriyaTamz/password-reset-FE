import instance from "./instance";

const authServices = {
    register: async (data) => {
        return await instance.post('/auth/register', data);
    },
    login: async (data) => {
        return await instance.post('/auth/login', data);
    },
    me: async (data) => {
        return await instance.get('/auth/me', data);
    },
    logout: async (data) => {
        return await instance.post('/auth/logout');
    },
    forgotpassword: async (data) => {
        return await instance.post('auth/forgot-password', data);
    },
    enterOtp: async (otp) => {
        return await instance.post('auth/verify-otp', {otp});
    },
    resetpassword: async (data) => {
        return await instance.post('auth/reset-password', data);
    }
}

 export default authServices;