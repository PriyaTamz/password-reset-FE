import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../features/authentication/registerSlice";
import loginReducer from "../features/authentication/loginSlice";
import forgotpasswordReducer from "../features/authentication/forgotpasswordSlice";
import otpReducer from "../features/authentication/enterOtpSlice";
import resetPasswordReducer from "../features/authentication/resetPasswordSlice";

const store = configureStore({
    reducer: {
        register: registerReducer,
        login: loginReducer,
        forgotpassword: forgotpasswordReducer,
        enterOtp: otpReducer,
        resetpassword: resetPasswordReducer,
    }
});

export default store;
