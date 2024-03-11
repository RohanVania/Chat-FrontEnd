import { createSlice } from "@reduxjs/toolkit";


const ListSlice={
    List:[] //* Try to get this using socket io later
}

const UserLists=createSlice({
    name:'List',
    initialState:ListSlice,
    reducers:{
        getAllList:(state,action)=>{
            state.doctorList=action.payload
        }
    }

})


export const {getAllList}=UserLists.actions
export default UserLists.reducer

