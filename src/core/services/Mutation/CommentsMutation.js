import { toast } from "react-toastify"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { CreateNewsCommentsApi } from "../api/CommentsApi"


export const  useCreateNewsComments=()=>{
    const queryClient=useQueryClient()
    return useMutation({
        mutationFn:(user)=> CreateNewsCommentsApi(user),

        onSuccess:()=>{
            toast.success(". پیام ارسال شد ، ایمیل خود را چک کنید " , {
                theme:"colored",
                     className:"custom-toast"
                })
        },
        onSettled:async(_,error) =>{
            if (error) {
              
                toast.error("خطایی رخ داده است", { theme: "colored",
                    className:"custom-toast" });
                
            }
            else{
               await queryClient.invalidateQueries({queryKey:["ForgetPassword"]})

            }
        },
    })
}