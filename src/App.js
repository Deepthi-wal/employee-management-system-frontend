import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import ErrorPage from "./components/ErrorPage";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import AdminDashboard from "./components/admin-dashboard/AdminDashboard";
import Navbar from "./components/navbar/Navbar";

function App() {
  //create browserrouter object
  const browserRouterObj=createBrowserRouter([
    {
      path:"/", //loads root layout when application launches
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children:[
        {
          path:"login",
          element: <Login />
        },
        {
          path:"register",
          element: <Register />
        },
        {
          path:"admin-dashboard",
          element: <AdminDashboard />,
          children:[
            {
              path:"navbar",
              element: <Navbar />
            }
          ]
        },
        {
          path:"/",
          element: <Login />
        }
      ]
    }
  ])

  return (
    <div className="App">
      {/* provide to app */}
      <RouterProvider router={browserRouterObj}/>
    </div>
  );
}

export default App;
