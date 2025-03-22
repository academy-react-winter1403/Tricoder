import { createBrowserRouter } from "react-router-dom";
import App from "../../app";
import { Landing } from "../../components/landing/Landing";
import { Course } from "../../components/courses/course";
import { AuthenticationLayout } from "../../app/layouts/AuthenticationLayout";
import { LandingScreen } from "../../pages/landing";
import  StudentPanel  from "../../app/layouts/StudentPanelLayout/StudentPanel";
import ChangePasswordPage from "../../components/panel/ChangePasswordPage/ChangePasswordPage"
import CommentPage from "../../components/panel/CommentPage/CommentPage"
import CoursePage from "../../components/panel/CoursePage/CoursePage"
import DashboardPage from "../../components/panel/DashboardPage/DashboardPage"
import EditProfilePage from "../../components/panel/EditProfilePage/EditProfilePage"
import LogoutPage from "../../components/panel/LogoutPage/LogoutPage"
import Pages from "../../app/layouts/PanelsPage"


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
        },
        {
          path: "/Studentpanel",
          element: <StudentPanel />,
          children: [
            { 
               path: "", 
               element: <Pages />, 
               children: [  // صفحات داخل `AllPages` نمایش داده می‌شوند
                  { path: "change-password", element: <ChangePasswordPage/> },
                  { path: "comment", element: <CommentPage/> },
                  { path: "mycourse", element: <CoursePage /> },
                  { path: "dashboard", element: <DashboardPage /> },
                  { path: "editprofile", element: <EditProfilePage/> },
                  { path: "logout", element: <LogoutPage/> },
               ]
            }
          ]
       }
      ]
    } ,
   
]
 )  