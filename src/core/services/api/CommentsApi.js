import http from "../interceptor"


export const GetAllNewsCommentsApi  = async (params) => {

    const data = await http.get("/News/GetNewsComments" , {
        params:params
    })
     
    console.log(data);
    return data;
  
    
};

export const CreateNewsCommentsApi  = async (user) => {

    const data = await http.post("/News/CreateNewsComment" , user)
     
    console.log(data);
    return data;
  
    
};

