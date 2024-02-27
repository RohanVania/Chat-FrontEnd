import axios from "axios";

const axiosInstance=axios.create({
    baseURL:'/',
})

const apiCaller=(method,url,data,headers,param)=>{
    return axiosInstance({
        method:`${method}`,
        url:`${url}`,
        data:data?data:null,
        headers:headers?headers:null,
        params:param?param:null
    })
}

export default apiCaller;