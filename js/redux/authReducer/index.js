import { otpVerifyReducer, userVerifyReducer } from "./loginReducer";
import { combineReducers } from '@reduxjs/toolkit';
import { webSocketConnectionReducer } from "./webSocketReducer";
import { isLoggedInReducer } from "./IsloggedIn";
export const authReducer = combineReducers({
    user: otpVerifyReducer,
    userVerify: userVerifyReducer,
    webSocket: webSocketConnectionReducer,
    isLoggedIn:isLoggedInReducer
})