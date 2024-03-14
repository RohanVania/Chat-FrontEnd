import apiCaller from "../apiConnector"
import { setCurrentChatUser, setMessages } from "../slices/ChatUser"
import { getAllList } from "../slices/List"

export const getAllUsers = async (role,dispatch) => {
    try {
        if(role==='patient'){
            const axiosResponse = await apiCaller('GET', '/api/users/doctors')
            dispatch(getAllList(axiosResponse.data.data))
            return axiosResponse
        }
        else{
            const axiosResponse = await apiCaller('GET', '/api/users/patients')
            dispatch(getAllList(axiosResponse.data.data))
            return axiosResponse
        
        }
    
    }
    catch (err) {
        console.log("Fetching all users", err)
    }
}

export const getMessageForEachUsers = async (element, dispatch) => {
    try {
        const axiosResponse = await apiCaller('GET', `/api/messenger/getAllMessages/${element.id}`)
        dispatch(setCurrentChatUser(element))
        dispatch(setMessages(axiosResponse.data.data))
        return axiosResponse;
    } catch (err) {
        console.log(err);
    }
}

 export const handleLogout =async()=>{
    try{
        const axiosResponse=await apiCaller('GET','/api/auth/user-logout');
        console.log(axiosResponse);
        localStorage.clear();

    }catch(err){
        console.log(err);
    }
 }