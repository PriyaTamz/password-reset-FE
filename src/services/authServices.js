import instance from "./instance";

const authServices = {
    register: async (data) => {
        try {
            const response = await instance.post('/auth/register', data);
            return response.data; 
        } catch (error) {
            console.error('Registration error:', error.response ? error.response.data : error.message);
            throw error; 
        }
    },
    login: async (data) => {
        try {
            const response = await instance.post('/auth/login', data);
            return response.data;
        } catch (error) {
            console.error('Login error:', error.response ? error.response.data : error.message);
            throw error;
        }
    },
    me: async () => {
        try {
            const response = await instance.get('/auth/me');
            return response.data;
        } catch (error) {
            console.error('Fetch user error:', error.response ? error.response.data : error.message);
            throw error;
        }
    },
    logout: async () => {
        try {
            const response = await instance.post('/auth/logout');
            return response.data;
        } catch (error) {
            console.error('Logout error:', error.response ? error.response.data : error.message);
            throw error;
        }
    },
    forgotpassword: async (data) => {
        try {
            const response = await instance.post('/auth/forgot-password', data);
            return response.data;
        } catch (error) {
            console.error('Forgot password error:', error.response ? error.response.data : error.message);
            throw error;
        }
    },
    enterOtp: async (otp) => {
        try {
            const response = await instance.post('/auth/verify-otp', { otp });
            return response.data;
        } catch (error) {
            console.error('Enter OTP error:', error.response ? error.response.data : error.message);
            throw error;
        }
    },
    resetpassword: async (data) => {
        try {
            const response = await instance.post('/auth/reset-password', data);
            return response.data;
        } catch (error) {
            console.error('Reset password error:', error.response ? error.response.data : error.message);
            throw error;
        }
    }
}

export default authServices;
