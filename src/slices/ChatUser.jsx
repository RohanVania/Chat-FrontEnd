import { createSlice } from "@reduxjs/toolkit";

const chatUser={
    currentChatUser: JSON.parse(localStorage.getItem('currentChatUser')) || null
}

const currenChattUser=createSlice({
    name:'currentChatUser',
    initialState:chatUser,
    reducers:{
        setCurrentChatUser:(state,action)=>{
            state.currentChatUser=action.payload;
        }
    }
})

export const {setCurrentChatUser}=currenChattUser.actions

export default currenChattUser.reducer