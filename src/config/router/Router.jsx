import { createBrowserRouter } from "react-router-dom";
import App from "../../app";
import { Landing } from "../../components/landing/Landing";
import { Course } from "../../components/courses/course";
import { AuthenticationLayout } from "../../app/layouts/AuthenticationLayout";
import { LandingScreen } from "../../pages/landing";
import { Login } from "../../components/authentication/login/Login";

import { SignUp } from "../../components/authentication/sighnup/SighnUp";
import { Code } from "../../components/authentication/code/Code";
import { CreateAcount } from "../../components/authentication/createacount/createAcount";


 export const routs = createBrowserRouter(
    [
    {
      path:"/",
      element: <App/>,
      children:[
        {
          path:"/",
          element:<LandingScreen/>,

        },
        
        {
          path:"/courses",
          element:<Course/>
        }
      ]
    },
    {
      path:"/authentication",
        element:<AuthenticationLayout/>,
          children:[
            {
              path:"/authentication/login",
              element:<Login/>
            } ,
            {
              path:"/authentication/CreateAcount",
              element:<CreateAcount/>
            },
            {
              path:"/authentication/signup",
              element:<SignUp/>
            },
            {
              path:"/authentication/code",
              element:<Code/>
            }
          ]
    } 
]
 )