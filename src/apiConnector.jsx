import axios from "axios";

const axiosInstance=axios.create({
    baseURL:'/',
    withCredentials:true
})

const apiCaller=(method,url,data,headers,param)=>{
    return axiosInstance({
        method:`${method}`,
        url:`${url}`,
        data:data?data:null,
        headers:headers?headers:null,
        // headers:{
        //     'Access-Control-Allow-Origin':'https://tcm-chat.netlify.app',
        //     'Content-type':'application/json'
        // },
        params:param?param:null,
        withCredentials:true
    })
}

export default apiCaller;