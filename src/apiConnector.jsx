import axios from "axios";

const axiosInstance=axios.create({
    baseURL:'https://chat-microservice-9gcv.onrender.com',
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