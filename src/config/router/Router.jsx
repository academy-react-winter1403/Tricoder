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




export const routs = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <LandingScreen />,
          children: [

          ]

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
          path: "/Studentpanel",
          element: <StudentPanelPage />,
          children: [
            { path: "/Studentpanel/change-password", element: <ChangePasswordPage /> },
            { path: "/Studentpanel/comment", element: <CommentPage /> },
            { path: "/Studentpanel/mycourse", element: <CoursePage /> },
            { path: "/Studentpanel/dashboard", element: <DashboardPage /> },
            { path: "/Studentpanel/editprofile", element: <EditProfilePage /> },
            { path: "/Studentpanel/logout", element: <LogoutPage /> },
          ],
        },
        {
          path: "/courseDetail/:courseId",
          element: <CourseDetailPage />,
        }
      ]
    },
    {
      path: "/authentication",
      element: <AuthenticationLayout />,
      children: [

      ]
    },

  ]
)

