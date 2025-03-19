import axios from "axios";
import { getItem } from "../common/storage.services";

const baseUrl = import.meta.env.VITE_BASE_URL

const http = axios.create({
    baseURL:baseUrl,

})




const onSucess = (res) =>{
    return res.data
}

const onError = (error) =>{
    console.log('error', error);
    if (error?.response.status===401) {
        window.location.pathname = "/login"
    }

    if (error?.response.status >=400 && error?.response.status < 500) {
        console.log("client error: ", error.response.status);
        
    }

    return Promise.reject(error)
    
}


http.interceptors.response.use(onSucess,onError)

http.interceptors.request.use((opt)=>{
    const token = getItem("token")
    if (token){
        opt.headers.Authorization= "bearer " + token

    }
    return opt 
})


export default http

