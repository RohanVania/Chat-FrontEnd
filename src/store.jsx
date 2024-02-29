import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/AuthSlice";
import ListReducer from "./slices/List";
import CurrentChatUser from "./slices/ChatUser"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    doctors:ListReducer,
    chatUser:CurrentChatUser
  },
});