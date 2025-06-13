import { createBrowserRouter } from "react-router-dom";
import App from "../../app";
import { Course } from "../../components/courses/course";
import { AuthenticationLayout } from "../../app/layouts/AuthenticationLayout";
import { LandingScreen } from "../../pages/landing";
import ChangePasswordPage from "../../components/panel/ChangePasswordPage/ChangePasswordPage";
import CommentPage from "../../components/panel/CommentPage/CommentPage";
import CoursePage from "../../components/panel/CoursePage/CoursePage";
import DashboardPage from "../../components/panel/DashboardPage/DashboardPage";
import EditProfilePage from "../../components/panel/EditProfilePage/EditProfilePage";
import LogoutPage from "../../components/panel/LogoutPage/LogoutPage";
import StudentPanelPage from "../../pages/StudentPanel";
import CourseDetailPage from "../../pages/courseDetail/CourseDetail";
import { NewsDetailScreen } from "../../pages/newsDetail/NewsDetailScreen";

import { News } from "../../pages/news/News";
import { MyFavoriteCourse } from "../../components/panel/myFavoritCourse/myFavoriteCourse";
import { MyFavoriteNews } from "../../components/panel/myFavoriteNews/MyFavoriteNews";
import { MyReservedCourse } from "../../components/panel/myReservedcourse/MyReservedCourse";

// import { Dropdown } from "../../components/courses/filters/ِdropDown/DropDown";


import { Login } from "../../components/authentication/login/Login";

import { SignUp } from "../../components/authentication/sighnup/SighnUp";
import { Code } from "../../components/authentication/code/Code";
import { CreateAcount } from "../../components/authentication/createacount/createAcount";


export const routs = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path:"/",
          element:<LandingScreen/>,

        },
        {
          path: "/courses",
          element: <Course />,

        },
        {
          path: "/news",
          element: <News />,

        },
        {
          path: "/newsDetail/:NewsId",
          element: <NewsDetailScreen />,
          children: [

          ]
        },
        
        {
          path: "/courseDetail/:courseId",
          element: <CourseDetailPage />,
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
,

        {
          path: "/Studentpanel",
          element: <StudentPanelPage />,
          children: [
            { path: "/Studentpanel/change-password", element: <ChangePasswordPage/> },
            { path: "/Studentpanel/comment", element: <CommentPage/> },
            { path: "/Studentpanel/mycourse", element: <CoursePage/> },
            { path: "/Studentpanel/dashboard", element: <DashboardPage/> },
            { path: "/Studentpanel/editprofile", element: <EditProfilePage/> },
            { path: "/Studentpanel/logout", element: <LogoutPage/> },
            { path: "/Studentpanel/myFavoritecourse", element: <MyFavoriteCourse/> },
            // { path: "/Studentpanel/MyFavoriteNews", element: <MyFavoriteNews/> },
            // { path: "/Studentpanel/MyReservedCourse", element: <MyReservedCourse/> },
          ],
        },
      

    
  ]
)

