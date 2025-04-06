import { createBrowserRouter } from "react-router-dom";
import App from "../../app";
import { Landing } from "../../components/landing/Landing";
import { Course } from "../../components/courses/course";
import { AuthenticationLayout } from "../../app/layouts/AuthenticationLayout";
import { LandingScreen } from "../../pages/landing";
import { NewsDetailScreen } from "../../pages/newsDetail/NewsDetailScreen";
import { LikeDislike } from "../../components/newsDetail/newsLikeRate/LikeDislike";


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
          path: "/newsDetail",
          element: <NewsDetailScreen />,
          children: [
           {  path:"/newsDetail/:NewsId" , element: <LikeDislike/>}
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