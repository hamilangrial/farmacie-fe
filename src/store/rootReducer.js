import { combineReducers } from "@reduxjs/toolkit";
import { store } from "@/store/store";
import authSlice from "@/store/auth/authSlice";
import { logoutUser } from "@/store/auth/authSlice";

const reducers = {
  auth: authSlice,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;

export const onLogout = () => {
  store.dispatch(logoutUser());
};
