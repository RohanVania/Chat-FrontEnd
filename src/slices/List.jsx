import { createSlice } from "@reduxjs/toolkit";


const doctorListSlice={
    doctorList:[] //* Try to get this using socket io later
}

const doctorLists=createSlice({
    name:'DoctorList',
    initialState:doctorListSlice,
    reducers:{
        getAllDoctorList:(state,action)=>{
            state.doctorList=action.payload
        }
    }

})


export const {getAllDoctorList}=doctorLists.actions
export default doctorLists.reducer

