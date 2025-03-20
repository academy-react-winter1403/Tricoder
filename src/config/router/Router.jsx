import { createBrowserRouter } from "react-router-dom";
import App from "../../app";
import { Landing } from "../../components/landing/Landing";
import { Course } from "../../components/courses/course";
import { AuthenticationLayout } from "../../app/layouts/AuthenticationLayout";
import { LandingScreen } from "../../pages/landing";
import { StudentPanel } from "../../components/student panel/StudentPanel";
import ChangePasswordPage from "../../app/layouts/student panel/Pages/ChangePasswordPage/ChangePasswordPage"
import CommentPage from "../../app/layouts/student panel/Pages/CommentPage/CommentPage"
import CoursePage from "../../app/layouts/student panel/Pages/CoursePage/CoursePage"
import DashboardPage from "../../app/layouts/student panel/Pages/DashboardPage/DashboardPage"
import EditProfilePage from "../../app/layouts/student panel/Pages/EditProfilePage/EditProfilePage"
import LogoutPage from "../../app/layouts/student panel/Pages/LogoutPage/LogoutPage"
import Pages from "../../app/layouts/student panel/Pages/Pages"


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