import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Cart from "./components/Cart";
import { CartProvider } from "./components/CartContext";
import RestaurantMenu from "./components/RestaurantMenu";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/cart", element: <Cart />},
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/restaurant/:resId", element: <RestaurantMenu /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <RouterProvider router={AppRouter} />
  </CartProvider>
);
