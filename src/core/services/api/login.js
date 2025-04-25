import http from "../interceptor"


export const loginApi  = async (user) => {

    const data = await http.post("/Sign/Login" , user)
     
    console.log(data);
    return data;
  
    
};