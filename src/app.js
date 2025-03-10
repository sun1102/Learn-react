import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantManu";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
// import Grocery from "./components/grocery";

// Chunking
// Code splitting
// Lazy loading
// dynamic code splitting
// on demand loading

const Grocery = lazy(() => import('./components/grocery'));
const About = lazy(() => import('./components/About'));

const AppLayout = () => {
  return (
    <div className="app-container">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Suspense fallback={<h1>Loading About Us...</h1>}><About /></Suspense> ,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
      {
        path: "/Grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
