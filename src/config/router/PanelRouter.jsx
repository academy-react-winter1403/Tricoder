
import {  createBrowserRouter , RouterProvider } from "react-router-dom";
import {ChangePasswordPage} from "../../components/student panel/Pages/ChangePasswordPage/ChangePasswordPage";
import {CommentPage} from "../../components/student panel/Pages/CommentPage/CommentPage";
import {CoursePage} from "../../components/student panel/Pages/CoursePage/CoursePage";
import {DashboardPage} from "../../components/student panel/Pages/DashboardPage/DashboardPage";
import {EditProfilePage} from "../../components/student panel/Pages/EditProfilePage/EditProfilePage";
import {LogoutPage} from "../../components/student panel/Pages/LogoutPage/LogoutPage";
import Pages from "../../components/student panel/Pages/Pages";
import StudentPanel from "../../components/student panel/StudentPanel";



const  PanelRouters = createBrowserRouter([ 
        {
            path: "/Studentpanel",
            element: <StudentPanel />,
            children: [
            {path:"/allPages" , element:<Pages/>},
            {path:"/change-password", element:<ChangePasswordPage/>},
            {path:"/comment", element:<CommentPage/>} ,
            {path:"/courses", element:<CoursePage/>} , 
            {path:"/dashboard", element:<DashboardPage/>} ,
            {path:"/editprofile", element:<EditProfilePage/>} ,
            {path:"/logout", element:<LogoutPage/>},
          ],  
        },
    ]) ;
   



export default PanelRouters;