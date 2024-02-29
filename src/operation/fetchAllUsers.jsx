import apiCaller from "../apiConnector"
import {getAllDoctorList} from "../slices/List"

export const getAllUsers=async (dispatch)=>{
    try{
        const axiosResponse=await apiCaller('GET','/api/users/doctors')
        dispatch(getAllDoctorList(axiosResponse.data.data))
        return axiosResponse
    }
    catch(err){
        console.log("Fetching all users",err)
    }
}