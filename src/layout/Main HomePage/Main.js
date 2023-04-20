import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../container/header/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Main;
