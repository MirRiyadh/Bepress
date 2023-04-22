import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main HomePage/Main";
import Home from "../../pages/home/Home";
import ErrorPage from "../../pages/error page/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      // {
      //   path: "/courses",
      //   element: <Courses></Courses>,
      // },
      // {
      //   path: "/about-us",
      //   element: <AboutUs></AboutUs>,
      // },
      // {
      //   path: "/blog",
      //   element: <Blog></Blog>,
      // },
      // {
      //   path: "/faq",
      //   element: <FAQ></FAQ>,
      // },
      // {
      //   path: "/register",
      //   element: <Register></Register>,
      // },
      // {
      //   path: "/login",
      //   element: <Login></Login>,
      // },
    ],
  },
  { path: "*", element: <ErrorPage></ErrorPage> },
  // { path: "/thankyou", element: <ThankyouPage></ThankyouPage> },
  // { path: "/terms", element: <TermsCondition></TermsCondition> },
]);
