import { createBrowserRouter } from "react-router-dom";
import App from "../../app";
import { Landing } from "../../components/landing/Landing";
import { Course } from "../../components/courses/course";
import { AuthenticationLayout } from "../../app/layouts/AuthenticationLayout";
import { LandingScreen } from "../../pages/landing";
import { NewsDetailScreen } from "../../pages/newsDetail/NewsDetailScreen";
import { LikeDislike } from "../../components/newsDetail/newsLikeRate/LikeDislike";
import { NewsDetail } from "../../components/newsDetail/NewsDetail";


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
          element: <Course />
        },
        {
          path: "/newsDetail/:NewsId",
          element: <NewsDetailScreen />,
          children: [
       
          ]
        },
      ]
    },
    {
      path: "/authentication",
      element: <AuthenticationLayout />,
      children: [

      ]
    }
  ]
)