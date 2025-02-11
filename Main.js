//importing React Library from react into javascript file.s
import React from "react";
//Outlet is used render the content of nested routes.
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

//arrow function
const Main = () => {
  return (
    <div>
      {/*Rendering the header,footer component and outlet*/}
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
