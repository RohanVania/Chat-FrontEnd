import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/AuthSlice";
import ListReducer from "./slices/List";
import CurrentChatUser from "./slices/ChatUser"

// export const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     doctors: ListReducer,
//     chatUser: CurrentChatUser
//   },
// });

const appReducer = combineReducers({
  auth: authReducer,
  doctors: ListReducer,
  chatUser: CurrentChatUser
})

export const rootReducer=(state,action)=>{
  console.log("Root",state);
  if(action.type==='logout'){
    console.log("Calling Logout",state)
    state=undefined;
    console.log(state)
    
  }
  return appReducer(state,action)
}

export const store=configureStore({
  reducer:rootReducer
})

export const {}=store.dispatch