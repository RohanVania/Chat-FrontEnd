import { createSlice } from "@reduxjs/toolkit";


const initialState={
    loading:false,
    authToken:localStorage.getItem('authToken') || null,
    authDetail:localStorage.getItem('userDetail') || null,
}

const authSlice=createSlice({
    name:'AuthDetail',
    initialState:initialState,
    reducers:{
        setAuthDetail:(state,action)=>{
            state.authDetail=action.payload
        },
        setAuthLoading:(state,action)=>{
            state.loading=action.payload
        },
        setAuthToken:(state,action)=>{
            state.authToken=action.payload
        }
        
        
    }
})


export const {setAuthDetail,setAuthToken}=authSlice.actions;
export default authSlice.reducer;