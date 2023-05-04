import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main';
import Home from './components/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          const [res1, res2, res3] = await Promise.all([
            fetch("http://localhost:5000/bannerdishes"),
            fetch("http://localhost:5000/chefs"),
            fetch("http://localhost:5000/tips")
          ]);
          const bannerDishes = await res1.json();
          const chefsSection = await res2.json();
          const tipsAndTricks = await res3.json();
          return { bannerDishes, chefsSection, tipsAndTricks };
        }
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
