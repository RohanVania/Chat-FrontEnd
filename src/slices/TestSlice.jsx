
import {createSlice} from "@reduxjs/toolkit";

const initialState={
    value:100
}

const counterSlice=createSlice({
    name:'counter',
    initialState:initialState,
    reducers:{
        increment:(state)=>{
            state.value+=1;
        },
        decrement:(state)=>{
            state.value-=1;
        }
    }
})

export const {increment,decrement}=counterSlice.reducer;
export default counterSlice.reducer;