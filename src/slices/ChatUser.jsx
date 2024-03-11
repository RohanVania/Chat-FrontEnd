import { createSlice } from "@reduxjs/toolkit";

const chatUser={
    currentChatUser: JSON.parse(localStorage.getItem('currentChatUser')) || null,
    messages:[]
}

const currenChattUser=createSlice({
    name:'currentChatUser',
    initialState:chatUser,
    reducers:{
        setCurrentChatUser:(state,action)=>{
            state.currentChatUser=action.payload;
        },
        setMessages:(state,action)=>{
            state.messages=action.payload
        },
        setMessageSendSuccess:(state,action)=>{
            state.messages=[...state.messages,action.payload]
        }
    }
})

export const {setCurrentChatUser,setMessages,setMessageSendSuccess}=currenChattUser.actions

export default currenChattUser.reducer