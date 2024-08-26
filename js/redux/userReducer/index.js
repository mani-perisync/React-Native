import { combineReducers } from '@reduxjs/toolkit';
import { userInfoReducer } from './userInfo';
import { dashBoardCarReducer } from './dashBoardCarModels';


export const userReducer = combineReducers({
    userInfo:userInfoReducer,
    dashBoardCarModels: dashBoardCarReducer,
})