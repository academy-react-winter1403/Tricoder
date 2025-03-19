import { createBrowserRouter } from "react-router-dom";
import App from "../../app";
import { Landing } from "../../components/landing/Landing";
import { Course } from "../../components/courses/course";
import { AuthenticationLayout } from "../../app/layouts/AuthenticationLayout";
import { LandingScreen } from "../../pages/landing";
import StudentPanel from "../../components/student panel/StudentPanel";
import Pages from "../../components/student panel/Pages/Pages";
import ChangePasswordPage from "../../components/student panel/Pages/ChangePasswordPage/ChangePasswordPage";
import CommentPage from "../../components/student panel/Pages/CommentPage/CommentPage";
import CoursePage from "../../components/student panel/Pages/CoursePage/CoursePage";
import DashboardPage from "../../components/student panel/Pages/DashboardPage/DashboardPage";
import EditProfilePage from "../../components/student panel/Pages/EditProfilePage/EditProfilePage";
import LogoutPage from "../../components/student panel/Pages/LogoutPage/LogoutPage";



 export const routs = createBrowserRouter(
    [
    {
      path:"/",
      element: <App/>,
      children:[
        {
          path:"/",
          element:<LandingScreen/>,
          children:[
            {
                path:"/authentication",
                element:<AuthenticationLayout/>,
                children:[
                    
                ]
            },
        
          ]
        },
        {
          path:"/courses",
          element:<Course/>
        }
      ]
    } ,
    {
      path: "/Studentpanel",
    element: <StudentPanel/>,
    children: [
    {path:"/allPages" , element:<Pages/>},
    {path:"/change-password", element:<ChangePasswordPage/>},
    {path:"/comment", element:<CommentPage/>} ,
    {path:"/courses", element:<CoursePage/>} , 
    {path:"/dashboard", element:<DashboardPage/>} ,
    {path:"/editprofile", element:<EditProfilePage/>} ,
    {path:"/logout", element:<LogoutPage/>},
  ],  
    }
]
 )