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
            fetch("http://localhost:5000/bannerdishes"),
            fetch("http://localhost:5000/chefs"),
            fetch("http://localhost:5000/tips"),
            fetch("http://localhost:5000/healthtips"),
            fetch("http://localhost:5000/headlines")
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
          const res = await fetch("http://localhost:5000/chefs");
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
