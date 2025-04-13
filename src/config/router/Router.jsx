import { createBrowserRouter } from "react-router-dom";
import App from "../../app";
import { Landing } from "../../components/landing/Landing";
import { Course } from "../../components/courses/course";
import { AuthenticationLayout } from "../../app/layouts/AuthenticationLayout";
import { LandingScreen } from "../../pages/landing";

import { NewsDetailScreen } from "../../pages/newsDetail/NewsDetailScreen";
import { LikeDislike } from "../../components/newsDetail/newsLikeRate/LikeDislike";
import { NewsDetail } from "../../components/newsDetail/NewsDetail";

import { View1 } from "../../components/courses/view1/View1";
import { View2 } from "../../components/courses/view2/View2";
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
      path:"/courses",
      element:<Course/>,
      
    },
     {
      path:"/news",
      element:<News/>,
      
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

