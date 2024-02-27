import apiCaller from "../apiConnector"
import toast from "react-hot-toast"
import {setAuthToken,setAuthDetail} from  "../slices/AuthSlice"
import socket from "../socket"

export const RegisterUser=(formData)=>{
    return async (dispatch)=>{
            // console.log("Form Register Action =>",formData)
            try{
                const headers={
                    "Content-Type":"multipart/form-data"
                }
                const axiosResponse=await apiCaller('POST','/api/messenger/user-register',formData,headers);
                console.log(axiosResponse.data);
                if(axiosResponse.data.status==='Failed'){
                    throw  Error(axiosResponse.data.msg)
                }else{
                    toast.success('Registered successfully 🔥',{
                        id:"registered-1"
                    })
                    return axiosResponse.data;
                }
            }catch(err){
                toast.error("Something wrong, please try again ❌",{
                    id:"register-failure-1"
                })
                console.log(err)
                return err

            }
    }
}

export const LoginUser=(formData)=>{
    return async (dispatch)=>{
        try{
            const axiosResponse=await apiCaller('POST','/api/messenger/user-login',formData);
            if(axiosResponse.data.status==="Success"){
                toast.success("User logged in successfully ✅",{
                    id:'Login-success-1'
                })
                dispatch(setAuthDetail(axiosResponse.data.data));
                dispatch(setAuthToken(axiosResponse.data.token))                
                localStorage.setItem('authToken',axiosResponse.data.token)
                socket.connect();
            }else{
                throw new Error(axiosResponse.data.msg)
            }
            return axiosResponse
        }catch(err){
            console.log(err)
            toast.error("User cannot login 😪",{
                id:'login-failure-1'
            })
            return err            
        }
    }
}