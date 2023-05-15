import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main';
import Home from './components/Home/Home';
import ChefDetails from './components/ChefDetails/ChefDetails';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import AuthProvider from './authProvider/AuthProvider';
import PrivateRoute from './privateRoute/PrivateRoute';
import Blogs from './components/Blogs/Blogs';
import Profile from './components/Profile/Profile';
import About from './components/About/About';
import Favorites from './components/Favorites/Favorites';
import UpdateProfile from './components/UpdateProfile/UpdateProfile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          const [res1, res2, res3, res4, res5] = await Promise.all([
            fetch("https://chefs-pentry-server-tamim-200091-yahoocom.vercel.app/bannerdishes"),
            fetch("https://chefs-pentry-server-tamim-200091-yahoocom.vercel.app/chefs"),
            fetch("https://chefs-pentry-server-tamim-200091-yahoocom.vercel.app/tips"),
            fetch("https://chefs-pentry-server-tamim-200091-yahoocom.vercel.app/healthtips"),
            fetch("https://chefs-pentry-server-tamim-200091-yahoocom.vercel.app/headlines")
          ]);
          const bannerDishes = await res1.json();
          const chefsSection = await res2.json();
          const tipsAndTricks = await res3.json();
          const healthTips = await res4.json();
          const headlines = await res5.json();
          return { bannerDishes, chefsSection, tipsAndTricks, healthTips, headlines };
        }
      },
      {
        path: "/recipes/:id",
        element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
        loader: async ({params}) => {
          const res = await fetch("https://chefs-pentry-server-tamim-200091-yahoocom.vercel.app/chefs");
          const data = await res.json();
          const chefDetail = data.find(singleChefDetail => singleChefDetail.id == params.id);
          return chefDetail;
        }
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/favorites",
        element: <PrivateRoute><Favorites></Favorites></PrivateRoute>
      },
      {
        path: "/updateProfile",
        element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
